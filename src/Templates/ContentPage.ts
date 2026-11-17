import "../Documentation.css";
import { Divider } from "./Divider.ts";

export class ContentPage extends HTMLElement
{
    private root!: HTMLDivElement;
    private titles!: HTMLDivElement;
    private titleDiv!: HTMLParagraphElement;
    private category!: HTMLParagraphElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.appendChild(this.root);

        const header: HTMLDivElement = this.root.appendChild(document.createElement("div")) as HTMLDivElement;
        header.style.display = "flex";
        header.style.justifyContent = "space-between";

        this.titles = header.appendChild(document.createElement("div")) as HTMLDivElement;
        this.titles.style.display = "flex";
        this.titles.style.flexDirection = "column";

        this.titleDiv = this.titles.appendChild(Object.assign(document.createElement("div"), { className: "c0" })) as HTMLParagraphElement;

        this.category = header.appendChild(document.createElement("div")) as HTMLParagraphElement;
        this.category.style.display = "flex";
        this.category.style.flexDirection = "column";
        this.category.style.justifyContent = "flex-end";
        this.category.style.fontSize = "24px";

        const divider: Divider = document.createElement("divider-element") as Divider;
        divider.Init();
        this.root.appendChild(divider);
    }

    public Configure(pageTitle: string, pageCategory: string, pageSubtitle: string = "")
    {
        this.titleDiv.innerHTML = pageTitle;
        this.category.innerHTML = pageCategory;
        if (pageSubtitle != "")
        {
            const subtitle: HTMLParagraphElement = this.titles.appendChild(document.createElement("div")) as HTMLParagraphElement;
            subtitle.style.fontSize = "20px";
            subtitle.innerHTML = pageSubtitle;
        }
    }
}