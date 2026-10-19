import '../Documentation.css';

export class Folder extends HTMLDivElement
{
    private open: boolean = false;
    private foldButton: HTMLButtonElement;
    private headerButton: HTMLButtonElement;
    private expandable: HTMLDivElement;
    private elements: HTMLDivElement;

    public constructor(headerName: string, headerLink: string = "")
    {
        super();
        this.style.display = "flex";
        this.style.flexDirection = "column";

        const header: HTMLDivElement = document.createElement('div');
        header.style.display = "flex";
        header.style.flexDirection = "row";
        this.appendChild(header);

        this.foldButton = document.createElement('button');
        this.foldButton.style.width = "20px";
        this.foldButton.style.border = "0px";
        this.foldButton.style.fontFamily = "Courier, monospace";
        this.foldButton.style.backgroundColor = "transparent";
        this.foldButton.style.fontSize = "24px";
        this.foldButton.textContent = "+";
        this.foldButton.classList.add('folder-link');
        this.foldButton.addEventListener("click", () => {
            this.Toggle();
        });
        header.appendChild(this.foldButton);

        this.headerButton = document.createElement('button');
        if (headerLink != "")
        {
            this.headerButton.innerHTML = '';
            const link = document.createElement('a');
            link.textContent = headerName;
            link.href = headerLink;
            link.classList.add('folder-link');
            this.headerButton.appendChild(link);
        }
        else
        {
            this.headerButton.textContent = headerName;
            this.headerButton.addEventListener("click", () =>
            {
                this.Toggle();
            });
        }
        this.headerButton.classList.add("folder-link");
        header.appendChild(this.headerButton);

        this.expandable = document.createElement('div');
        this.expandable.classList.add("expandable-wrapper");
        this.appendChild(this.expandable);

        this.elements = document.createElement('div');
        this.elements.style.display = "flex";
        this.elements.style.flexDirection = "column";
        this.elements.classList.add("expandable-content");
        this.expandable.appendChild(this.elements);
    }

    public Toggle()
    {
        if (this.open)
        {
            this.foldButton.textContent = '+';
            this.expandable.classList.remove("open");
            this.open = false;
        }
        else
        {
            this.foldButton.textContent = '-';
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