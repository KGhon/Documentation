import { Divider } from './Divider.ts';

export class TableOfContents extends HTMLDivElement
{
    private indentation: number = 30;
    private label: HTMLLabelElement;

    public constructor(name:string)
    {
        super();
        this.style.padding = "8px";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.position = "sticky";
        this.style.top = "5vh";
        this.style.height = "calc(100vh - var(--header-height))";
        this.style.maxHeight = "calc(100vh - var(--header-height))";
        this.style.overflowY = "auto";
        this.style.overflowX = "hidden";
        this.style.borderStyle = "solid";
        this.style.borderWidth = "0px 0px 0px 2px";
        this.style.borderColor = "var(--border-color)";
        this.style.boxSizing = "border-box";

        this.label = document.createElement('label');
        this.label.style.textIndent = "20px";
        this.label.style.fontSize = "24px";
        this.label.textContent = name;
        this.appendChild(this.label);

        const divider: Divider = document.createElement('div', { is: 'divider-element' }) as Divider;
        this.appendChild(divider);
    }

    public Populate(content: HTMLElement)
    {
        let matches: NodeListOf<HTMLElement> = content.querySelectorAll('.c1, .c2, .c3');
        for (const match of matches)
        {
            const link: HTMLAnchorElement = document.createElement('a');
            link.textContent = match.textContent;
            link.addEventListener("click", (evt) => {
                evt.preventDefault()
                match.scrollIntoView({ block: 'start' });
            });
            if (match.classList.contains('c1'))
            {
                link.style.margin = '0px 0px 0px 0px';
            }
            else if (match.classList.contains('c2'))
            {
                link.style.margin = `0px 0px 0px ${this.indentation * 1}px`;
            }
            else if (match.classList.contains('c3'))
            {
                link.style.margin = `0px 0px 0px ${this.indentation * 2}px`;
            }
            this.appendChild(link);
        }
    }

    public SetTitle(name: string)
    {
        this.label.textContent = name;
    }
}