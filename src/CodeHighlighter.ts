import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { parse } from "csv-parse/sync";
import { createHighlighterCore } from 'shiki/core';
import type { HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import darkplus from '@shikijs/themes/dark-plus';
import csharp from '@shikijs/langs/csharp';
import cpp from '@shikijs/langs/cpp';
import lua from '@shikijs/langs/lua';

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

async function GetDirectories(dir: string): Promise<string[]>
{
    let dirs: string[] = [];
    const list = await fsPromises.readdir(dir, { withFileTypes: true });
    let hasValidFiles = false;

    for (const file of list)
    {
        const res = path.resolve(dir, file.name);
        if (file.isDirectory())
        {
            dirs = dirs.concat(await GetDirectories(res));
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
    return dirs;
}

async function ProcessDirectory(dirPath: string): Promise<void>
{
    const list = await fsPromises.readdir(dirPath, { withFileTypes: true });
    const targetFiles = list.filter(file => !file.isDirectory() && (file.name.endsWith('.txt') || file.name.endsWith('.csv')));

    if (targetFiles.length <= 0)
    {
        return;
    }

    const folderName = path.basename(dirPath);
    const jsonPath = path.join("generated", `${folderName}-generated.json`);
    const fileRecord: Record<string, any> = {};

    for (const file of targetFiles)
    {
        const filePath = path.join(dirPath, file.name);

        const match = file.name.match(/^(.+?)-(csharp|cpp|lua)\.(txt|csv)$/i);
        if (!match)
        {
            continue;
        }

        const language = match[2].toLowerCase();
        let content = await fsPromises.readFile(filePath, 'utf-8');

        let postHighlights: string[][] = [];
        content = content.replace(
            /^[^\r\n]*\[\s*([^,\]]+?)\s*,\s*([^,\]]+?)\s*\][^\r\n]*/gm,
            (_fullLine: string, term: string, color: string) =>
            {
                postHighlights.push([term, color]);
                return '';
            }
        );

        if (file.name.endsWith('.txt'))
        {
            let htmlOutput = await (await GetHighlighter()).codeToHtml(content.trim(), { lang: language, theme: 'dark-plus' });
            htmlOutput = htmlOutput.replace('<pre class="shiki', '<pre style="margin: 0; padding: 20px; tab-size: 4;" class="shiki');

            for (const highlight of postHighlights)
            {
                htmlOutput = htmlOutput.replace(
                    new RegExp(
                        `<span\\s+style\\s*=\\s*["'][^"']*color\\s*:\\s*[^"'>]*?["']>(\\s*${highlight[0]}\\s*)<\\/span>`,
                        "g"
                    ),
                    (_fullMatch: string, capturedTerm: string) =>
                    {
                        return `<span style="color: ${highlight[1]}">${capturedTerm}</span>`;
                    }
                );
            }

            fileRecord[match[1]] = htmlOutput;
        }
        else if (file.name.endsWith('.csv'))
        {
            const data: string[][] = parse(content, { skipEmptyLines: true });

            for (const row of data)
            {
                if (row.length > 0)
                {
                    row[0] = await (await GetHighlighter()).codeToHtml(row[0].trim(), { lang: language, theme: 'dark-plus' });
                    row[0] = row[0].replace(/^<pre[^>]*><code>([\s\S]*)<\/code><\/pre>$/, '$1');
                    row[0] = `<code style="white-space: pre-wrap; word-break: break-word;">${row[0]}</code>`;
                }
            }

            for (const highlight of postHighlights)
            {
                for (const row of (data as string[][]))
                {
                    row[0] = row[0].replace(
                        new RegExp(
                            `<span\\s+style\\s*=\\s*["'][^"']*color\\s*:\\s*[^"'>]*?["']>(\\s*${highlight[0]}\\s*)<\\/span>`,
                            "g"
                        ),
                        (_fullMatch: string, capturedTerm: string) =>
                        {
                            return `<span style="color: ${highlight[1]}">${capturedTerm}</span>`;
                        }
                    );
                }
            }

            fileRecord[match[1]] = data;
        }
    }

    await fsPromises.writeFile(jsonPath, JSON.stringify(fileRecord, null, 2), 'utf-8');
    console.log(`[CodeHighlighter] Updated JSON file with highlighted code: ${jsonPath}`);
}

async function HighlightCode(targetDirectory: string)
{
    const dirs = await GetDirectories(targetDirectory);
    for (const dir of dirs)
    {
        if (!dir.endsWith("-code"))
        {
            continue;
        }
        await ProcessDirectory(dir);
    }
}

await HighlightCode("data");