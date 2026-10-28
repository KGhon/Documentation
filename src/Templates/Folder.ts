import '../Documentation.css';

export class Folder extends HTMLDivElement
{
    private open: boolean = false;
    private foldButton: HTMLButtonElement;
    private header: HTMLDivElement;
    private headerButton!: HTMLButtonElement;
    private expandable: HTMLDivElement;
    private elements: HTMLDivElement;

    public constructor()
    {
        super();
        this.style.display = "flex";
        this.style.flexDirection = "column";

        this.header = document.createElement('div');
        this.header.style.display = "flex";
        this.header.style.flexDirection = "row";
        this.appendChild(this.header);
        
        this.foldButton = document.createElement('button');
        this.foldButton.style.padding = "0";
        this.foldButton.style.border = "0";
        this.foldButton.style.color = "white";
        this.foldButton.style.backgroundColor = "transparent";
        this.foldButton.textContent = "\u25B6";
        this.foldButton.addEventListener("click", () => {
            this.Toggle();
        });
        this.header.appendChild(this.foldButton);
        
        this.expandable = document.createElement('div');
        this.expandable.classList.add("expandable-wrapper");
        this.appendChild(this.expandable);

        this.elements = document.createElement('div');
        this.elements.style.display = "flex";
        this.elements.style.flexDirection = "column";
        this.elements.classList.add("expandable-content");
        this.expandable.appendChild(this.elements);
    }

    public Configure(headerName: string, headerLink: HTMLAnchorElement | null)
    {
        this.headerButton = document.createElement('button');
        if (headerLink != null)
        {
            this.headerButton.innerHTML = '';
            headerLink.classList.add('folder-link');
            this.headerButton.appendChild(headerLink);
        }
        else
        {
            this.headerButton.style.color = "white";
            this.headerButton.textContent = headerName;
            this.headerButton.addEventListener("click", () =>
            {
                this.Toggle();
            });
        }
        this.headerButton.classList.add("folder-link");
        this.header.appendChild(this.headerButton);
    }

    public Toggle()
    {
        if (this.open)
        {
            this.foldButton.textContent = '\u25B6';
            this.expandable.classList.remove("open");
            this.open = false;
        }
        else
        {
            this.foldButton.textContent = '\u25BD';
            this.expandable.classList.add("open");
            this.open = true;
        }
    }

    public AddElement(element: HTMLElement)
    {
        element.classList.add("folder-link", 'folder-element');
        this.elements.appendChild(element);
    }
}