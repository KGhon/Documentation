import type { Plugin } from 'vite';
import path from 'node:path';
import fs from 'node:fs/promises';
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

/**
 * Recursively find all .ts files in a directory
 */
async function getAllTsFiles(dir: string): Promise<string[]>
{
    let results: string[] = [];
    try
    {
        const list = await fs.readdir(dir, { withFileTypes: true });
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

/**
 * Read and process a single file's snippets into the map
 */
async function processFileContent(
    filePath: string,
    absoluteDir: string,
    fileSnippetsMap: Map<string, Record<string, string>>
): Promise<void>
{
    try
    {
        const code = await fs.readFile(filePath, 'utf-8');
        const normalizedId = filePath.replace(/\\/g, '/');

        if (!normalizedId.startsWith(absoluteDir) || !normalizedId.endsWith('.ts'))
        {
            return;
        }

        const regex = /(?:(const|let|var)\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:(cpp|csharp|lua)\s*)?`((?:[^`\\]|\\.)*)`/g;
        const matches = [...code.matchAll(regex)];

        const relativePath = path.relative(absoluteDir, filePath).replace(/\\/g, '/');
        const dirName = path.basename(path.dirname(relativePath));

        let folderRecord = fileSnippetsMap.get(dirName);
        if (!folderRecord)
        {
            folderRecord = {};
            fileSnippetsMap.set(dirName, folderRecord);
        }

        // If a file no longer contains matches, clear or leave existing entries (or you can manage per-file clearing)
        if (matches.length === 0)
        {
            return;
        }

        for (const match of matches)
        {
            const varName = match[2];
            const lang = (match[3] || 'cpp') as SupportedLanguage;
            const snippet = match[4] || '';
            const htmlOutput = await formatCodeToHtml(snippet.trim(), lang);
            folderRecord[varName] = htmlOutput;
        }
    } catch (err)
    {
        console.error(`[CodeHighlighterPlugin] Error reading file ${filePath}:`, err);
    }
}

/**
 * Vite Plugin
 */
export function CodeHighlighterPlugin(targetDirectory: string): Plugin
{
    const absoluteDir = path.resolve(process.cwd(), targetDirectory).replace(/\\/g, '/');
    const fileSnippetsMap = new Map<string, Record<string, string>>();

    return {
        name: 'vite-plugin-code-highlighter-json',

        // Scan all files in the directory upfront (including unimported ones)
        async buildStart()
        {
            fileSnippetsMap.clear();
            const files = await getAllTsFiles(absoluteDir);

            for (const file of files)
            {
                // Tell Vite to watch this file even if it's not part of the import graph
                this.addWatchFile(file);
                await processFileContent(file, absoluteDir, fileSnippetsMap);
            }

            console.log(`[CodeHighlighterPlugin] Processed ${files.length} files from ${targetDirectory}`);
        },

        // Update snippets dynamically when watched files change during development
        async watchChange(id)
        {
            const normalizedId = id.replace(/\\/g, '/');
            if (normalizedId.startsWith(absoluteDir) && normalizedId.endsWith('.ts'))
            {
                await processFileContent(id, absoluteDir, fileSnippetsMap);
                console.log(`[CodeHighlighterPlugin] Updated snippets for: ${path.relative(absoluteDir, id)}`);
            }
        },

        // Expose a virtual module to let transformed files access the snippets
        resolveId(id)
        {
            if (id === 'virtual:code-snippets')
            {
                return '\0virtual:code-snippets';
            }
        },

        load(id)
        {
            if (id === '\0virtual:code-snippets')
            {
                const obj = Object.fromEntries(fileSnippetsMap.entries());
                return `export default ${JSON.stringify(obj)};`;
            }
        },

        // Transform is still used for files that ARE imported so their template literals get swapped out
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

            // Replace template literals with a lookup reference
            const newCode = code.replace(regex, (_, declaration, varName) =>
            {
                const declPrefix = declaration ? `${declaration} ` : '';
                const relativePath = path.relative(absoluteDir, id).replace(/\\/g, '/');
                const dirName = path.basename(path.dirname(relativePath));
                return `${declPrefix}${varName} = __CODE_SNIPPETS__["${dirName}"]["${varName}"]`;
            });

            return {
                code: `import __CODE_SNIPPETS__ from 'virtual:code-snippets';\n${newCode}`,
                map: null
            };
        },

        // Generate and emit the build-only JSON asset into the output bundle
        generateBundle()
        {
            const obj = Object.fromEntries(fileSnippetsMap.entries());
            this.emitFile({
                type: 'asset',
                fileName: 'code-snippets.json',
                source: JSON.stringify(obj, null, 2)
            });
            console.log(`[CodeHighlighterPlugin] Emitted build-only 'code-snippets.json' asset.`);
        }
    };
}