import path from 'node:path';
import fsPromises from 'node:fs/promises';

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
        else if (file.name.endsWith('.txt'))
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
    const targetFiles = list.filter(file => !file.isDirectory() && (file.name.endsWith('.txt')));

    if (targetFiles.length <= 0)
    {
        return;
    }

    const folderName = path.basename(dirPath);
    const jsonPath = path.join("generated", `${folderName}-generated.json`);

    const fileRecord: Record<string, string> = {};

    for (const file of targetFiles)
    {
        const filePath = path.join(dirPath, file.name);

        const match = file.name.match(/^(.+?)(?<!-[a-z]+)\.(txt|csv)$/i);
        if (!match)
        {
            continue;
        }

        let content = await fsPromises.readFile(filePath, 'utf-8');
        const texts = content.matchAll(/\[([^\]]+)\]([^[]*)/gi);

        for (const text of texts)
        {
            // text[1] becomes the property name/key, text[2] is the value
            fileRecord[text[1].trim()] = text[2].trim();
        }
    }

    await fsPromises.writeFile(jsonPath, JSON.stringify(fileRecord, null, 2), 'utf-8');
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