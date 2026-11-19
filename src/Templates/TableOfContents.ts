import "../Documentation.css";
import "./TableOfContents.css";
import { Divider } from "./Divider.ts";

export class TableOfContents extends HTMLElement
{
    private root!: HTMLDivElement;
    private pageName!: HTMLDivElement;
    private linksDiv!: HTMLDivElement;

    public Init()
    {
        this.classList.add("table-of-contents");

        this.root = document.createElement("div");
        this.root.classList.add("table-of-contents__root");
        this.appendChild(this.root);

        this.pageName = document.createElement("div");
        this.pageName.textContent = "Contents";
        this.pageName.classList.add("table-of-contents__name");
        this.root.appendChild(this.pageName);

        const divider: Divider = document.createElement("divider-element") as Divider;
        divider.Init();
        this.root.appendChild(divider);

        this.linksDiv = document.createElement("div");
        this.root.append(this.linksDiv);
    }

    public Populate(content: HTMLElement, callback:() => void)
    {
        this.linksDiv.innerHTML = "";
        let matches: NodeListOf<HTMLElement> = content.querySelectorAll(".c1, .c2, .c3");
        for (const match of matches)
        {
            const container: HTMLDivElement = document.createElement("div");
            container.classList.add("drawer-c1");
            container.classList.add("highlightable");

            const bulletPoint: HTMLDivElement = document.createElement("div");
            bulletPoint.textContent = "\u25AA";
            bulletPoint.classList.add("table-of-contents__bullet");
            container.appendChild(bulletPoint);

            const link: HTMLAnchorElement = document.createElement("a");
            link.textContent = match.textContent;
            link.classList.add("fill-a");
            link.addEventListener("click", (evt) => {
                evt.preventDefault()
                match.scrollIntoView({ block: "start" });
                callback();
            });
            if (match.classList.contains("c1"))
            {
                container.classList.add("table-of-contents__c1");
            }
            else if (match.classList.contains("c2"))
            {
                container.classList.add("table-of-contents__c2");
            }
            else if (match.classList.contains("c3"))
            {
                container.classList.add("table-of-contents__c3");
            }
            container.appendChild(link);
            this.linksDiv.appendChild(container);
        }
    }

    public SetPageName(name: string)
    {
        this.pageName.textContent = name.replace(/([a-z0-9])([A-Z])|([A-Z]+)([A-Z][a-z])/g, "$1$3 $2$4");
    }
}