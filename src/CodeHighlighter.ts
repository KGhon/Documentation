import type { Plugin } from 'vite';
import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { createHighlighterCore } from 'shiki/core';
import type { HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import darkplus from '@shikijs/themes/dark-plus';
import csharp from '@shikijs/langs/csharp';
import cpp from '@shikijs/langs/cpp';
import lua from '@shikijs/langs/lua';

type SupportedLanguage = 'cpp' | 'csharp' | 'lua';

let highlighter: HighlighterCore | null = null;

async function GetHighlighter(): Promise<HighlighterCore>
{
    if (!highlighter)
    {
        highlighter = await createHighlighterCore({
            themes: [darkplus],
            langs: [csharp, cpp, lua],
            engine: createJavaScriptRegexEngine(),
        });
    }
    return highlighter;
}

// Used for full .txt code files (keeps the <pre> block styling)
async function formatCodeToHtml(code: string, lang: SupportedLanguage): Promise<string>
{
    const hl = await GetHighlighter();
    const highlightedCode = await hl.codeToHtml(code, { lang, theme: 'dark-plus' });

    return highlightedCode.replace(
        '<pre class="shiki',
        '<pre style="margin: 0; padding: 20px; tab-size: 4;" class="shiki'
    );
}

// Used for .csv table cells (strips the outer <pre><code> wrapper to leave just the inner spans)
async function formatCsvCellToHtml(code: string, lang: SupportedLanguage): Promise<string>
{
    const hl = await GetHighlighter();
    const html = await hl.codeToHtml(code, { lang, theme: 'dark-plus' });

    return html.replace(/^<pre[^>]*><code>([\s\S]*)<\/code><\/pre>$/, '$1');
}

// Robust CSV line parser that respects quotes
function parseCsvLine(text: string): string[]
{
    const result: string[] = [];
    let inQuotes = false;
    let current = '';

    for (let i = 0; i < text.length; i++)
    {
        const char = text[i];
        if (char === '"' && (i === 0 || text[i - 1] !== '\\'))
        {
            inQuotes = !inQuotes;
        }
        else if (char === ',' && !inQuotes)
        {
            result.push(current.trim().replace(/^["']|["']$/g, ''));
            current = '';
        }
        else
        {
            current += char;
        }
    }
    result.push(current.trim().replace(/^["']|["']$/g, ''));
    return result;
}

function parseCsvTo2DArray(csvText: string): string[][]
{
    const lines = csvText.trim().split(/\r?\n/);
    return lines
        .filter(line => line.trim().length > 0)
        .map(line => parseCsvLine(line));
}

async function getTargetDirectories(dir: string): Promise<string[]>
{
    let dirs: string[] = [];
    try
    {
        const list = await fsPromises.readdir(dir, { withFileTypes: true });
        let hasValidFiles = false;

        for (const file of list)
        {
            const res = path.resolve(dir, file.name);
            if (file.isDirectory())
            {
                dirs = dirs.concat(await getTargetDirectories(res));
            }
            else if (file.name.endsWith('.txt') || file.name.endsWith('.csv'))
            {
                hasValidFiles = true;
            }
        }

        if (hasValidFiles)
        {
            dirs.push(dir);
        }
    } catch (e)
    {
        // Directory might not exist yet
    }
    return dirs;
}

async function processDirectory(
    dirPath: string,
    defaultLang: SupportedLanguage
): Promise<void>
{
    try
    {
        const list = await fsPromises.readdir(dirPath, { withFileTypes: true });
        const targetFiles = list.filter(
            file => !file.isDirectory() && (file.name.endsWith('.txt') || file.name.endsWith('.csv'))
        );

        if (targetFiles.length === 0)
        {
            return;
        }

        const folderName = path.basename(dirPath);
        const parentDir = path.dirname(dirPath);
        const jsonPath = path.join(parentDir, `${folderName}.json`);

        const fileRecord: Record<string, any> = {};

        for (const file of targetFiles)
        {
            const filePath = path.join(dirPath, file.name);
            const isTxt = file.name.endsWith('.txt');
            const isCsv = file.name.endsWith('.csv');

            // Matches: variableName.ext OR variableName-language.ext (e.g. Test.csv or Test-csharp.csv)
            const match = file.name.match(/^(.+?)(?:-(cpp|csharp|lua))?\.(txt|csv)$/i);
            if (!match) continue;

            const varName = match[1];
            const fileLang = (match[2] ? match[2].toLowerCase() : defaultLang) as SupportedLanguage;
            const content = await fsPromises.readFile(filePath, 'utf-8');

            if (isTxt)
            {
                const htmlOutput = await formatCodeToHtml(content.trim(), fileLang);
                fileRecord[varName] = htmlOutput;
            }
            else if (isCsv)
            {
                const grid = parseCsvTo2DArray(content);

                // Apply syntax highlighting directly to the first element of every row using the correct language
                for (const row of grid)
                {
                    if (row.length > 0)
                    {
                        const firstItem = row[0] || '';
                        row[0] = await formatCsvCellToHtml(firstItem.trim(), fileLang);
                    }
                }

                fileRecord[varName] = grid;
            }
        }

        await fsPromises.writeFile(jsonPath, JSON.stringify(fileRecord, null, 2), 'utf-8');
    } catch (err)
    {
        console.error(`[CodeHighlighterPlugin] Error processing directory ${dirPath}:`, err);
    }
}

/**
 * Vite Plugin
 */
export function CodeHighlighterPlugin(
    targetDirectory: string,
    defaultLang: SupportedLanguage = 'cpp'
): Plugin
{
    const absoluteDir = path.resolve(process.cwd(), targetDirectory).replace(/\\/g, '/');

    return {
        name: 'vite-plugin-code-highlighter-json',

        async buildStart()
        {
            const dirs = await getTargetDirectories(absoluteDir);

            for (const dir of dirs)
            {
                const list = await fsPromises.readdir(dir, { withFileTypes: true });
                for (const file of list)
                {
                    if (file.name.endsWith('.txt') || file.name.endsWith('.csv'))
                    {
                        this.addWatchFile(path.join(dir, file.name));
                    }
                }
                await processDirectory(dir, defaultLang);
            }

            console.log(`[CodeHighlighterPlugin] Generated companion JSONs for ${dirs.length} folders in ${targetDirectory}`);
        },

        async watchChange(id)
        {
            const normalizedId = id.replace(/\\/g, '/');
            if (normalizedId.startsWith(absoluteDir) && (normalizedId.endsWith('.txt') || normalizedId.endsWith('.csv')))
            {
                const dirPath = path.dirname(id);
                await processDirectory(dirPath, defaultLang);
                console.log(`[CodeHighlighterPlugin] Updated JSON for folder: ${path.basename(dirPath)}`);
            }
        }
    };
}