import { Folder } from './Folder.ts';
import { SitePages } from '../Globals/SitePages.ts'

export class NavigationColumn extends HTMLDivElement
{
    private folders: Map<string, Folder> = new Map();

    public constructor()
    {
        super()
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.position = "sticky";
        this.style.top = "10vh";
        this.style.maxHeight = "100vh";
        this.style.overflowY = "auto";
        this.style.overflowX = "hidden";
    }

    public connectedCallback()
    {
        for (const [key, value] of SitePages.pages)
        {
            let folder: Folder;
            let path = SitePages.contentLocation + '/' + value[1] + '/' + value[0];
            if (this.folders.has(path))
            {
                folder = this.folders.get(path)!;
            }
            else
            {
                if (key == value[0])
                {
                    folder = new Folder(value[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'), SitePages.contentLocation + '/' + value[1] + '/' + value[0] + '/' + key + '.html');
                    this.folders.set(path, folder);
                    continue;
                }

                folder = new Folder(value[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'));
                this.folders.set(path, folder);
            }

            const link: HTMLAnchorElement = document.createElement('a');
            link.textContent = key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
            link.href = SitePages.contentLocation + '/' + value[1] + '/' + value[0] + '/' + key + '.html';
            folder.AddElement(link);
        }

        for (const [_key, value] of this.folders)
        {
            this.appendChild(value);
        }
    }


}