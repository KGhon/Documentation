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

async function formatCodeToHtml(code: string, lang: SupportedLanguage): Promise<string>
{
    const hl = await GetHighlighter();
    const highlightedCode = await hl.codeToHtml(code, { lang, theme: 'dark-plus' });

    return highlightedCode.replace(
        '<pre class="shiki',
        '<pre style="margin: 0; padding: 20px; tab-size: 4;" class="shiki'
    );
}

async function getAllTsFiles(dir: string): Promise<string[]>
{
    let results: string[] = [];
    try
    {
        const list = await fsPromises.readdir(dir, { withFileTypes: true });
        for (const file of list)
        {
            const res = path.resolve(dir, file.name);
            if (file.isDirectory())
            {
                results = results.concat(await getAllTsFiles(res));
            }
            else if (file.name.endsWith('.ts'))
            {
                results.push(res);
            }
        }
    } catch (e)
    {
        // Directory might not exist yet
    }
    return results;
}

async function processFileContent(
    filePath: string,
    absoluteDir: string
): Promise<void>
{
    try
    {
        const code = await fsPromises.readFile(filePath, 'utf-8');
        const normalizedId = filePath.replace(/\\/g, '/');

        if (!normalizedId.startsWith(absoluteDir) || !normalizedId.endsWith('.ts'))
        {
            return;
        }

        const regex = /(?:(const|let|var)\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:(cpp|csharp|lua)\s*)?`((?:[^`\\]|\\.)*)`/g;
        const matches = [...code.matchAll(regex)];

        const fileRecord: Record<string, string> = {};

        if (matches.length > 0)
        {
            for (const match of matches)
            {
                const varName = match[2];
                const lang = (match[3] || 'cpp') as SupportedLanguage;
                const snippet = match[4] || '';
                const htmlOutput = await formatCodeToHtml(snippet.trim(), lang);
                fileRecord[varName] = htmlOutput;
            }
        }

        const jsonPath = filePath.replace(/\.ts$/, '.json');
        await fsPromises.writeFile(jsonPath, JSON.stringify(fileRecord, null, 2), 'utf-8');
    } catch (err)
    {
        console.error(`[CodeHighlighterPlugin] Error processing file ${filePath}:`, err);
    }
}

/**
 * Vite Plugin
 */
export function CodeHighlighterPlugin(targetDirectory: string): Plugin
{
    const absoluteDir = path.resolve(process.cwd(), targetDirectory).replace(/\\/g, '/');

    return {
        name: 'vite-plugin-code-highlighter-json',

        async buildStart()
        {
            const files = await getAllTsFiles(absoluteDir);

            for (const file of files)
            {
                this.addWatchFile(file);
                await processFileContent(file, absoluteDir);
            }

            console.log(`[CodeHighlighterPlugin] Generated companion JSONs for ${files.length} files in ${targetDirectory}`);
        },

        async watchChange(id)
        {
            const normalizedId = id.replace(/\\/g, '/');
            if (normalizedId.startsWith(absoluteDir) && normalizedId.endsWith('.ts'))
            {
                await processFileContent(id, absoluteDir);
                console.log(`[CodeHighlighterPlugin] Updated JSON for: ${path.relative(absoluteDir, id)}`);
            }
        },

        transform(code, id)
        {
            const normalizedId = id.replace(/\\/g, '/');

            if (!normalizedId.startsWith(absoluteDir) || !normalizedId.endsWith('.ts'))
            {
                return null;
            }

            const regex = /(?:(const|let|var)\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:(cpp|csharp|lua)\s*)?`((?:[^`\\]|\\.)*)`/g;
            const matches = [...code.matchAll(regex)];

            if (matches.length === 0)
            {
                return null;
            }

            const jsonFileName = path.basename(id).replace(/\.ts$/, '.json');

            const newCode = code.replace(regex, (_, declaration, varName) =>
            {
                const declPrefix = declaration ? `${declaration} ` : '';
                return `${declPrefix}${varName} = __CODE_SNIPPETS__["${varName}"]`;
            });

            return {
                code: `import __CODE_SNIPPETS__ from './${jsonFileName}';\n${newCode}`,
                map: null
            };
        }
    };
}