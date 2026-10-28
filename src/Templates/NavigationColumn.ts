import "../Documentation.css";
import { Folder } from './Folder.ts';
import { Divider } from './Divider.ts';

export class NavigationColumn extends HTMLDivElement
{
    private pageName: HTMLLabelElement;
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

        this.pageName = document.createElement('label');
        this.pageName.style.fontSize = "20px";
        this.pageName.textContent = "Site";
        this.appendChild(this.pageName);

        const divider: Divider = document.createElement('div', { is: 'divider-element' }) as Divider;
        this.appendChild(divider);
    }

    public Populate(items: [string, string, boolean, boolean][], callback: (pageName:string, pushHistory: boolean) => void)
    {
        for (const [name, path, isLink, isFolder] of items)
        {
            const spacedName = name.replace(/([a-z0-9])([A-Z])|([A-Z]+)([A-Z][a-z])/g, '$1$3 $2$4');
            let folder: Folder;
            if (this.folders.has(path) && path != "")
            {
                folder = this.folders.get(path)!;
                if (isFolder)
                {
                    let newFolder: Folder;
                    if (isLink)
                    {
                        const link: HTMLAnchorElement = document.createElement('a');
                        link.href = `#${name}`;
                        link.textContent = spacedName;
                        link.addEventListener("click", (evt) =>
                        {
                            evt.preventDefault()
                            callback(name, true);
                        });
                        newFolder = new Folder(spacedName, link);
                    }
                    else
                    {
                        newFolder = new Folder(spacedName, null);
                    }
                    folder.AddElement(newFolder);
                    this.folders.set(path, newFolder);
                }
                else
                {
                    const link: HTMLAnchorElement = document.createElement('a');
                    link.href = `#${name}`;
                    link.textContent = spacedName;
                    link.addEventListener("click", (evt) =>
                    {
                        evt.preventDefault()
                        callback(name, true);
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
                        link.href = `#${name}`;
                        link.textContent = spacedName;
                        link.addEventListener("click", (evt) =>
                        {
                            evt.preventDefault()
                            callback(name, true);
                        });
                        newFolder = new Folder(spacedName, link);
                    }
                    else
                    {
                        newFolder = new Folder(spacedName, null);
                    }
                    this.appendChild(newFolder);
                    this.folders.set(path + name, newFolder);
                }
                else
                {
                    const link: HTMLAnchorElement = document.createElement('a');
                    link.href = `#${name}`;
                    link.textContent = spacedName;
                    link.addEventListener("click", (evt) =>
                    {
                        evt.preventDefault()
                        callback(name, true);
                    });
                    this.appendChild(link);
                }
            }

        }

        for (const [_key, value] of this.folders)
        {
            this.appendChild(value);
        }
    }

    public SetPageName(name: string)
    {
        this.pageName.textContent = name;
    }
}