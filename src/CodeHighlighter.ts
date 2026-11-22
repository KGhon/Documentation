import path from "node:path";
import fsPromises from "node:fs/promises";
import { parse } from "csv-parse/sync";
import { createHighlighterCore } from "shiki/core";
import type { HighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma"
import darkplus from "@shikijs/themes/dark-plus";
import csharp from "@shikijs/langs/csharp";
import cpp from "@shikijs/langs/cpp";
import lua from "@shikijs/langs/lua";
import { Hyperlinks } from "./Hyperlinks.ts";
import { AutoColors } from "./AdditionalAutoColors.ts";

let highlighter: HighlighterCore | null = null;

const customTheme = {
    ...darkplus,
    tokenColors: [
        ...(darkplus.tokenColors || []),
        {
            scope: [
                "storage.modifier.pointer",
                "storage.modifier.reference",
                "keyword.operator.address",
                "keyword.operator.dereference",
                "keyword.operator.pointer",
                "keyword.operator.reference",
                "keyword.operator.cpp",
            ],
            settings: {
                foreground: "#D4D4D4"
            }
        }
    ]
}

async function GetHighlighter(): Promise<HighlighterCore>
{
    if (!highlighter)
    {
        highlighter = await createHighlighterCore({
            themes: [darkplus],
            langs: [csharp, cpp, lua],
            engine: createOnigurumaEngine(import("shiki/wasm")),
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
        else if (file.name.endsWith(".txt") || file.name.endsWith(".csv"))
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
    const targetFiles = list.filter(file => !file.isDirectory() && (file.name.endsWith(".txt") || file.name.endsWith(".csv")));

    if (targetFiles.length <= 0)
    {
        return;
    }

    const folderName = path.basename(dirPath);
    const jsonPath = path.join("generated", `${folderName}-generated.json`);
    const fileRecord: Record<string, any> = {};

    const links: Map<string, string> = new Map<string, string>();
    const searchWords: string[] = [];
    for (const [link, words] of Hyperlinks)
    {
        for (const word of words)
        {
            links.set(word, link);
            searchWords.push(word);
        }
    }
    searchWords.sort((a, b) => b.length - a.length)
    const linkPattern = searchWords.join("|");
    const hyperlinkRegex = new RegExp(`(?:<a\\b[^>]*>[\\s\\S]*?<\\/a>)|\\b(${linkPattern})\\b`, "g");

    const autoColors: Map<string, string> = new Map<string, string>();
    const autoColorWords: string[] = [];
    for (const [color, words] of AutoColors)
    {
        for (const word of words)
        {
            autoColors.set(word, color);
            autoColorWords.push(word);
        }
    }
    autoColorWords.sort((a, b) => b.length - a.length)
    const autoColorPattern = autoColorWords.join("|");
    const autoColorRegex = new RegExp(`\\b(${autoColorPattern})\\b`, "g");

    for (const file of targetFiles)
    {
        const filePath = path.join(dirPath, file.name);

        const match = file.name.match(/^(.+?)-(csharp|cpp|lua)\.(txt|csv)$/i);
        if (!match)
        {
            continue;
        }

        const language = match[2].toLowerCase();
        let content = await fsPromises.readFile(filePath, "utf-8");

        let postHighlights: string[][] = [];
        content = content.replace(/^[^\r\n]*\[\s*([^,\]]+?)\s*,\s*([^,\]]+?)\s*\][^\r\n]*/gm, (_fullLine: string, term: string, color: string) =>
        {
            postHighlights.push([term, color]);
            return "";
        });

        if (file.name.endsWith(".txt"))
        {
            let htmlOutput = await (await GetHighlighter()).codeToHtml(content.trim(), { lang: language, theme: customTheme });
            htmlOutput = htmlOutput.replace('<pre class="shiki', '<pre style="margin: 0; padding: 20px; tab-size: 4;" class="shiki');

            for (const highlight of postHighlights)
            {
                htmlOutput = htmlOutput.replace(new RegExp(`<span\\s+style\\s*=\\s*["'][^"']*color\\s*:\\s*[^"'>]*?["']>(\\s*${highlight[0]}\\s*)<\\/span>|(\\b${highlight[0]}\\b)`, "g"), (_fullMatch: string, _capturedTerm: string) =>
                {
                    return `<span style="color:${highlight[1]}">${highlight[0]}</span>`;
                });
            }

            fileRecord[match[1]] = htmlOutput;
        }
        else if (file.name.endsWith(".csv"))
        {
            const data: string[][] = parse(content, { skipEmptyLines: true });

            for (const row of data)
            {
                if (row.length > 0)
                {
                    row[0] = await (await GetHighlighter()).codeToHtml(row[0].trim(), { lang: language, theme: customTheme });
                    row[0] = row[0].replace(/^<pre[^>]*><code>([\s\S]*)<\/code><\/pre>$/, "$1");
                    row[0] = `<code style="white-space: pre-wrap; word-break: break-word;">${row[0]}</code>`;

                    row[1] = row[1].replace(/\{\s*([^,\s}]+)\s*,\s*([^,}\s]+(?:\s+[^,}\s]+)*)\s*\}/g, (_fullLine: string, url: string, display: string) =>
                    {
                        return `<a href='/Documentation/Pages/${url}'>${display}</a>`;
                    });

                    row[1] = row[1].replace(hyperlinkRegex, (fullLine: string, display: string) =>
                    {
                        if (display != null)
                        {
                            return `<a href='/Documentation/Pages/${links.get(display)}'>${display}</a>`;
                        }

                        return fullLine;
                    });

                    row[1] = row[1].replace(autoColorRegex, (fullLine: string, display: string) =>
                    {
                        if (display != null)
                        {
                            return `<span style="color:${autoColors.get(display)}">${display}</span>`;
                        }

                        return fullLine;
                    });
                }
            }

            for (const highlight of postHighlights)
            {
                for (const row of (data as string[][]))
                {
                    row[0] = row[0].replace(new RegExp(`<span\\s+style\\s*=\\s*["'][^"']*color\\s*:\\s*[^"'>]*?["']>(\\s*${highlight[0]}\\s*)<\\/span>|(\\b${highlight[0]}\\b)`, "g"), (_fullMatch: string, _capturedTerm: string) =>
                    {
                        return `<span style="color:${highlight[1]}">${highlight[0]}</span>`;
                    });
                }
            }

            fileRecord[match[1]] = data;
        }
    }

    await fsPromises.writeFile(jsonPath, JSON.stringify(fileRecord, null, 2), "utf-8");
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