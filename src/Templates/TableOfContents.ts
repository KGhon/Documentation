import "../Documentation.css";
import { Divider } from './Divider.ts';

export class TableOfContents extends HTMLElement
{
    private root!: HTMLDivElement;
    private pageName!: HTMLLabelElement;
    private links!: HTMLDivElement;
    private indentation: number = 30;

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
        this.root.style.borderWidth = "0px 0px 0px 2px";
        this.root.style.borderColor = "var(--border-color)";
        this.root.style.boxSizing = "border-box";
        this.appendChild(this.root);

        this.pageName = document.createElement('label');
        this.pageName.style.fontSize = "20px";
        this.pageName.textContent = "Contents";
        this.root.appendChild(this.pageName);

        const divider: Divider = document.createElement("divider-element") as Divider;
        divider.Init();
        this.root.appendChild(divider);

        this.links = document.createElement("div");
        this.links.style.display = "flex";
        this.links.style.flexDirection = "column";
        this.root.appendChild(this.links);
    }

    public Populate(content: HTMLElement)
    {
        this.links.innerHTML = "";
        let matches: NodeListOf<HTMLElement> = content.querySelectorAll('.c1, .c2, .c3');
        for (const match of matches)
        {
            const header: HTMLDivElement = document.createElement('div');
            header.style.display = "flex";
            header.style.flexDirection = "row";

            const bulletPoint: HTMLDivElement = document.createElement('div');
            bulletPoint.style.paddingRight = "10px";
            bulletPoint.textContent = "\u25AA";
            header.appendChild(bulletPoint);

            const link: HTMLAnchorElement = document.createElement('a');
            link.textContent = match.textContent;
            link.addEventListener("click", (evt) => {
                evt.preventDefault()
                match.scrollIntoView({ block: 'start' });
            });
            if (match.classList.contains('c1'))
            {
                header.style.margin = '0px 0px 0px 0px';
            }
            else if (match.classList.contains('c2'))
            {
                header.style.margin = `0px 0px 0px ${this.indentation * 1}px`;
            }
            else if (match.classList.contains('c3'))
            {
                header.style.margin = `0px 0px 0px ${this.indentation * 2}px`;
            }
            header.appendChild(link);
            this.links.appendChild(header);
        }
    }

    public SetPageName(name: string)
    {
        this.pageName.textContent = name.replace(/([a-z0-9])([A-Z])|([A-Z]+)([A-Z][a-z])/g, '$1$3 $2$4');
    }
}