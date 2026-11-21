import path from "node:path";
import fsPromises from "node:fs/promises";
import { parse } from "csv-parse/sync";
import { Hyperlinks } from "./Hyperlinks.ts";

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
        else if (file.name.endsWith(".txt"))
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
    const pattern = searchWords.join("|");
    const hyperlinkRegex = new RegExp(`(?:<a\\b[^>]*>[\\s\\S]*?<\\/a>)|\\b(${pattern})\\b`, "g");

    for (const file of targetFiles)
    {
        const filePath = path.join(dirPath, file.name);

        const match = file.name.match(/^(.+?)(?<!-[a-z]+)\.(txt|csv)$/i);
        if (!match)
        {
            continue;
        }

        let content = await fsPromises.readFile(filePath, "utf-8");
        content = content.replace(/\{\s*([^,\s}]+)\s*,\s*([^,}\s]+(?:\s+[^,}\s]+)*)\s*\}/g, (_fullLine: string, url: string, display: string) =>
        {
            return `<a href='/Documentation/Pages/${url}'>${display}</a>`;
        });

        content = content.replace(hyperlinkRegex, (fullLine: string, display: string) =>
        {
            if (display != null)
            {
                return `<a href='/Documentation/Pages/${links.get(display)}'>${display}</a>`;
            }

            return fullLine;
        });

        if (file.name.endsWith(".txt"))
        {
            const texts = content.matchAll(/\[([^\]]+)\]([^[]*)/gi);
            for (const text of texts)
            {
                fileRecord[text[1].trim()] = text[2].trim();
            }
        }
        else if (file.name.endsWith(".csv"))
        {
            const data: string[][] = parse(content, { skipEmptyLines: true });
            fileRecord[file.name.substring(0, file.name.length - 4)] = data;
        }
    }

    await fsPromises.writeFile(jsonPath, JSON.stringify(fileRecord, null, 2), "utf-8");
    console.log(`[TextToJSON] Updated JSON file text variables: ${jsonPath}`);
}

async function ConvertTextToJSON(targetDirectory: string)
{
    const dirs = await GetDirectories(targetDirectory);
    for (const dir of dirs)
    {
        if (!dir.endsWith("-text"))
        {
            continue;
        }
        await ProcessDirectory(dir);
    }
}

ConvertTextToJSON("data");