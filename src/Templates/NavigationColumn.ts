import { Folder } from './Folder.ts';
import { Divider } from './Divider.ts';
import { SitePages } from '../Globals/SitePages.ts'

export class NavigationColumn extends HTMLDivElement
{
    private folders: Map<string, Folder> = new Map();

    public constructor()
    {
        super();
        this.style.padding = "8px";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.position = "sticky";
        this.style.top = "5vh";
        this.style.height = "calc(100vh - var(--header-height))";
        this.style.maxHeight = "calc(100vh - var(--header - height))";
        this.style.overflowY = "auto";
        this.style.overflowX = "hidden";
        this.style.borderStyle = "solid";
        this.style.borderWidth = "0px 2px 0px 0px";
        this.style.borderColor = "var(--border-color)";
        this.style.boxSizing = "border-box";

        const label: HTMLLabelElement = document.createElement('label');
        label.style.textIndent = "20px";
        label.style.fontSize = "24px";
        label.textContent = "Site";
        this.appendChild(label);

        const divider: Divider = document.createElement('div', { is: 'divider-element' }) as Divider;
        this.appendChild(divider);
    }

    public connectedCallback()
    {
        for (const [key, value] of SitePages.pages)
        {
            let folder: Folder;
            let path = SitePages.contentLocation + value[1] + '/' + value[0];
            if (this.folders.has(path))
            {
                folder = this.folders.get(path)!;
            }
            else
            {
                if (key == value[0])
                {
                    folder = new Folder(value[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'), path + '/' + key + '.html');
                    this.folders.set(path, folder);
                    continue;
                }

                folder = new Folder(value[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'));
                this.folders.set(path, folder);
            }

            const link: HTMLAnchorElement = document.createElement('a');
            link.textContent = key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
            link.href = path + '/' + key + '.html';
            folder.AddElement(link);
        }

        for (const [_key, value] of this.folders)
        {
            this.appendChild(value);
        }
    }


}