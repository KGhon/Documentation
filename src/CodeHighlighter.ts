import type { Plugin } from 'vite';
import path from 'node:path';
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
 * Helper to handle asynchronous regex replacements across an entire string safely
 */
async function replaceAsync(
    str: string,
    regex: RegExp,
    asyncFn: (lang: SupportedLanguage, snippet: string) => Promise<string>
): Promise<string>
{
    const matches = [...str.matchAll(regex)];
    const promises = matches.map(match =>
    {
        const lang = (match[1] || 'cpp') as SupportedLanguage;
        const snippet = match[2] || '';
        return asyncFn(lang, snippet);
    });

    const data = await Promise.all(promises);

    let i = 0;
    return str.replace(regex, () => data[i++]);
}

/**
 * Vite Plugin
 */
export function CodeHighlighterPlugin(targetDirectory: string): Plugin
{
    // Normalize absolute path to use forward slashes for reliable cross-platform matching
    const absoluteDir = path.resolve(process.cwd(), targetDirectory).replace(/\\/g, '/');

    return {
        name: 'vite-plugin-recursive-highlight',
        async transform(code, id)
        {
            // Normalize the module ID as well
            const normalizedId = id.replace(/\\/g, '/');

            // Only process .ts files inside the specified target directory
            if (!normalizedId.startsWith(absoluteDir) || !normalizedId.endsWith('.ts'))
            {
                return null;
            }

            // Matches optional language tag (cpp|csharp|lua) followed by template literals,
            // safely supporting escaped backticks inside.
            const regex = /(?:(cpp|csharp|lua)\s*)?`((?:[^`\\]|\\.)*)`/g;

            if (!regex.test(code))
            {
                return null;
            }
            regex.lastIndex = 0; // Reset index after test

            // Perform asynchronous replacement in-memory
            const newCode = await replaceAsync(code, regex, async (lang, snippet) =>
            {
                const htmlOutput = await formatCodeToHtml(snippet.trim(), lang);
                return JSON.stringify(htmlOutput);
            });

            if (newCode !== code)
            {
                console.log(`[HighlightCode] Successfully transformed in-memory: ${path.relative(process.cwd(), id)}`);
                return {
                    code: newCode,
                    map: null
                };
            }

            return null;
        }
    };
}