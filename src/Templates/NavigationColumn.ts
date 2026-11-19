import "../Documentation.css";
import "./NavigationColumn.css";
import { Folder } from "./Folder.ts";
import { Divider } from "./Divider.ts";

export class NavigationColumn extends HTMLElement
{
    private root!: HTMLDivElement;
    private pageName!: HTMLDivElement;
    private folders: Map<string, Folder> = new Map();

    public Init()
    {
        this.classList.add("navigation-column");

        this.root = document.createElement("div");
        this.root.classList.add("navigation-column__root");
        this.appendChild(this.root);

        this.pageName = document.createElement("div");
        this.pageName.textContent = "Site";
        this.pageName.classList.add("navigation-column__name");
        this.root.appendChild(this.pageName);

        const divider: Divider = document.createElement("divider-element") as Divider;
        divider.Init();
        this.root.appendChild(divider);
    }

    public Populate(items: [string, string, boolean, boolean][], callback: (pageName:string, pushHistory: boolean) => void)
    {
        for (const [name, path, isLink, isFolder] of items)
        {
            const spacedName = name.replace(/([a-z0-9])([A-Z])|([A-Z]+)([A-Z][a-z])/g, "$1$3 $2$4");
            let folder: Folder;

            const container: HTMLDivElement = document.createElement("div");
            container.classList.add("navigation-column__container");

            const bulletPoint: HTMLDivElement = document.createElement("div");
            bulletPoint.textContent = "\u25AA";
            bulletPoint.classList.add("navigation-column__bullet");
            container.appendChild(bulletPoint);

            const link: HTMLAnchorElement = document.createElement("a");
            link.textContent = spacedName;
            link.classList.add("drawer-c1");
            link.classList.add("fill-a");
            if (isLink)
            {
                link.href = `#${name}`;
                container.classList.add("highlightable");
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
            container.appendChild(link);

            if (this.folders.has(path) && path != "")
            {
                folder = this.folders.get(path)!;
                if (isFolder)
                {
                    let newFolder: Folder;
                    if (isLink)
                    {
                        newFolder = document.createElement("folder-element") as Folder;
                        newFolder.classList.add("highlightable");
                        newFolder.Init();
                        newFolder.Configure(spacedName, link);
                    }
                    else
                    {
                        newFolder = document.createElement("folder-element") as Folder;
                        newFolder.Init();
                        newFolder.Configure(spacedName, null);
                    }
                    newFolder.classList.add("drawer-c1");
                    folder.AddElement(newFolder);
                    this.folders.set(path + name + "/", newFolder);
                }
                else
                {
                    folder.AddElement(container);
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
                        newFolder.classList.add("highlightable");
                        newFolder.Init();
                        newFolder.Configure(spacedName, link);
                    }
                    else
                    {
                        newFolder = document.createElement("folder-element") as Folder;
                        newFolder.Init();
                        newFolder.Configure(spacedName, null);
                    }
                    newFolder.classList.add("drawer-c1");
                    this.root.appendChild(newFolder);
                    this.folders.set(path + name + "/", newFolder);
                }
                else
                {
                    this.root.appendChild(container);
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