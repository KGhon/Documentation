import "../Documentation.css";
import "./Folder.css";
export class Folder extends HTMLElement
{
    private root!: HTMLDivElement;
    private open: boolean = false;
    private foldButton!: HTMLButtonElement;
    private header!: HTMLDivElement;
    private headerButton!: HTMLButtonElement;
    private expandable!: HTMLDivElement;
    private elements!: HTMLDivElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.root.classList.add("folder__root");
        this.appendChild(this.root);

        this.header = document.createElement("div");
        this.header.classList.add("folder__header");
        this.root.appendChild(this.header);
        
        this.foldButton = document.createElement("button");
        this.foldButton.textContent = "\u25B6";
        this.foldButton.classList.add("folder__bullet");
        this.foldButton.addEventListener("click", () => {
            this.Toggle();
        });
        this.header.appendChild(this.foldButton);
        
        this.expandable = document.createElement("div");
        this.expandable.classList.add("folder__expandable-wrapper");
        this.root.appendChild(this.expandable);

        this.elements = document.createElement("div");
        this.elements.classList.add("folder__expandable-content");
        this.expandable.appendChild(this.elements);
    }

    public Configure(headerName: string, headerLink: HTMLAnchorElement | null)
    {
        this.headerButton = document.createElement("button");
        this.headerButton.classList.add("folder__button");
        if (headerLink != null)
        {
            this.headerButton.innerHTML = "";
            headerLink.classList.add("folder__link");
            this.headerButton.appendChild(headerLink);
        }
        else
        {
            this.headerButton.textContent = headerName;
            this.headerButton.addEventListener("click", () =>
            {
                this.Toggle();
            });
        }
        this.header.appendChild(this.headerButton);
    }

    public Toggle()
    {
        if (this.open)
        {
            this.Fold();
        }
        else
        {
            this.Expand();
        }
    }

    public Expand()
    {
        this.foldButton.textContent = "\u25BD";
        this.expandable.classList.add("open");
        this.open = true;
    }

    public Fold()
    {
        this.foldButton.textContent = "\u25B6";
        this.expandable.classList.remove("open");
        this.open = false;
    }

    public AddElement(element: HTMLElement)
    {
        element.classList.add("folder__link", "folder__element");
        this.elements.appendChild(element);
    }
}