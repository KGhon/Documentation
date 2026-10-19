import { Folder } from '../Templates/Folder.ts';

export class TableOfContents extends HTMLDivElement
{
    //If folder should link to a page, add it before pages or folders it will contain
    public static readonly siteTree: Map<string, [folder: string, path: string]> = new Map([
        ['AudioProduction', ['AudioProduction', '']],
        ['GUIToolkit', ['AudioProduction', '']]
    ]);

    public static readonly contentLocation: string = 'src/Content';

    private folders: Map<string, Folder> = new Map();

    public constructor()
    {
        super()

        for (const [key, value] of TableOfContents.siteTree)
        {
            let folder: Folder;
            let path = TableOfContents.contentLocation + '/' + value[1] + '/' + value[0];
            if (this.folders.has(path))
            {
                folder = this.folders.get(path)!;
            }
            else
            {
                if (key == value[0])
                {
                    folder = new Folder(value[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'), TableOfContents.contentLocation + '/' + value[1] + '/' + value[0] + '/' + key + '.html');
                    this.folders.set(path, folder);
                    continue;
                }

                folder = new Folder(value[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'));
                this.folders.set(path, folder);
            }

            const link: HTMLAnchorElement = document.createElement('a');
            link.textContent = key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
            link.href = TableOfContents.contentLocation + '/' + value[1] + '/' + value[0] + '/' + key + '.html';
            link.style.textDecoration = "none";
            link.addEventListener("mouseover", () => {
                link.style.textDecoration = "underline";
            });
            link.addEventListener("mouseout", () => {
                link.style.textDecoration = "none";
            })
            folder.AddElement(link);
        }

        for (const [_key, value] of this.folders)
        {
            this.appendChild(value);
        }
    }


}