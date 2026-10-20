import { Folder } from './Folder.ts';
import { Divider } from './Divider.ts';

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

    public Populate(items: [string, string, boolean, boolean][], callback: (pageName:string) => void)
    {
        for (const [name, path, isLink, isFolder] of items)
        {
            let folder: Folder;
            if (this.folders.has(path))
            {
                folder = this.folders.get(path)!;
                if (isFolder)
                {
                    let newFolder: Folder;
                    if (isLink)
                    {
                        const link: HTMLAnchorElement = document.createElement('a');
                        link.textContent = name;
                        link.addEventListener("click", (evt) =>
                        {
                            evt.preventDefault()
                            callback(name);
                        });
                        newFolder = new Folder(name, link);
                    }
                    else
                    {
                        newFolder = new Folder(name, null);
                    }
                    folder.AddElement(newFolder);
                    this.folders.set(path, newFolder);
                }
                else
                {
                    const link: HTMLAnchorElement = document.createElement('a');
                    link.textContent = name;
                    link.addEventListener("click", (evt) =>
                    {
                        evt.preventDefault()
                        callback(name);
                    });
                    folder.AddElement(link);
                }
            }
            else
            {
                if (isFolder)
                {
                    let newFolder: Folder;
                    if (isLink)
                    {
                        const link: HTMLAnchorElement = document.createElement('a');
                        link.textContent = name;
                        link.addEventListener("click", (evt) =>
                        {
                            evt.preventDefault()
                            callback(name);
                        });
                        newFolder = new Folder(name, link);
                    }
                    else
                    {
                        newFolder = new Folder(name, null);
                    }
                    this.appendChild(newFolder);
                    this.folders.set(path + name.replace(/\s/g, ""), newFolder);
                }
                else
                {
                    const link: HTMLAnchorElement = document.createElement('a');
                    link.textContent = name;
                    this.appendChild(link);
                }
            }

        }

        for (const [_key, value] of this.folders)
        {
            this.appendChild(value);
        }
    }
}