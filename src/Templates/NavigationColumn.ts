import "../Documentation.css";
import { Folder } from './Folder.ts';
import { Divider } from './Divider.ts';

export class NavigationColumn extends HTMLElement
{
    private root!: HTMLDivElement;
    private pageName!: HTMLLabelElement;
    private folders: Map<string, Folder> = new Map();

    public Init()
    {
        this.style.display = "block";
        this.style.width = "100%";
        this.style.height = "100%";
        this.style.boxSizing = "border-box";

        this.root = document.createElement("div");
        this.root.style.width = "100%";
        this.root.style.height = "100%";
        this.root.style.padding = "8px";
        this.root.style.display = "block";
        this.root.style.flexDirection = "column";
        this.root.style.overflowY = "auto";
        this.root.style.overflowX = "hidden";
        this.root.style.borderStyle = "solid";
        this.root.style.borderWidth = "0px 2px 0px 0px";
        this.root.style.borderColor = "var(--border-color)";
        this.root.style.boxSizing = "border-box";
        this.appendChild(this.root);

        this.pageName = document.createElement('label');
        this.pageName.style.fontSize = "20px";
        this.pageName.textContent = "Site";
        this.root.appendChild(this.pageName);

        const divider: Divider = document.createElement("divider-element") as Divider;
        divider.Init();
        this.root.appendChild(divider);
    }

    public Populate(items: [string, string, boolean, boolean][], callback: (pageName:string, pushHistory: boolean) => void)
    {
        for (const [name, path, isLink, isFolder] of items)
        {
            const spacedName = name.replace(/([a-z0-9])([A-Z])|([A-Z]+)([A-Z][a-z])/g, '$1$3 $2$4');
            let folder: Folder;

            const header: HTMLDivElement = document.createElement('div');
            header.style.display = "flex";
            header.style.flexDirection = "row";

            const bulletPoint: HTMLDivElement = document.createElement('div');
            bulletPoint.style.paddingRight = "10px";
            bulletPoint.textContent = "\u25AA";
            header.appendChild(bulletPoint);

            const link: HTMLAnchorElement = document.createElement('a');
            link.textContent = spacedName;
            if (isLink)
            {
                link.href = `#${name}`;
                link.addEventListener("click", (evt) =>
                {
                    evt.preventDefault()
                    callback(name, true);
                });
            }
            else
            {
                link.classList.add("placeholder-a");
            }
            header.appendChild(link);

            if (this.folders.has(path) && path != "")
            {
                folder = this.folders.get(path)!;
                if (isFolder)
                {
                    let newFolder: Folder;
                    if (isLink)
                    {
                        newFolder = document.createElement("folder-element") as Folder;
                        newFolder.Init();
                        newFolder.Configure(spacedName, link);
                    }
                    else
                    {
                        newFolder = document.createElement("folder-element") as Folder;
                        newFolder.Init();
                        newFolder.Configure(spacedName, null);
                    }
                    folder.AddElement(newFolder);
                    this.folders.set(path + name + "/", newFolder);
                }
                else
                {
                    folder.AddElement(header);
                }
            }
            else
            {
                if (isFolder)
                {
                    let newFolder: Folder;
                    if (isLink)
                    {
                        newFolder = document.createElement("folder-element") as Folder;
                        newFolder.Init();
                        newFolder.Configure(spacedName, link);
                    }
                    else
                    {
                        newFolder = document.createElement("folder-element") as Folder;
                        newFolder.Init();
                        newFolder.Configure(spacedName, null);
                    }
                    this.root.appendChild(newFolder);
                    this.folders.set(path + name + "/", newFolder);
                }
                else
                {
                    this.root.appendChild(header);
                }
            }
        }
    }

    public SetPageName(name: string)
    {
        this.pageName.textContent = name;
    }

    public SetAllFoldersExpand(isExpanded: boolean)
    {
        if (isExpanded)
        {
            for (const folder of this.folders.values())
            {
                folder.Expand();
            }
        }
        else
        {
            for (const folder of this.folders.values())
            {
                folder.Fold();
            }
        }
    }
}