import "../Documentation.css";
import "./ContentPage.css";
import { Divider } from "./Divider.ts";

export class ContentPage extends HTMLElement
{
    private root!: HTMLDivElement;
    private titlesDiv!: HTMLDivElement;
    private pageName!: HTMLDivElement;
    private category!: HTMLDivElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.appendChild(this.root);

        const header: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        header.classList.add("content-page__header");
        this.root.appendChild(header);

        this.titlesDiv = document.createElement("div") as HTMLDivElement;
        this.titlesDiv.classList.add("content-page__titles-div");
        header.appendChild(this.titlesDiv);

        this.pageName = document.createElement("div") as HTMLDivElement;
        this.pageName.classList.add("c0");
        this.titlesDiv.appendChild(this.pageName);

        this.category = document.createElement("div") as HTMLDivElement;
        this.category.classList.add("content-page__category");
        header.appendChild(this.category);

        const divider: Divider = document.createElement("divider-element") as Divider;
        divider.Init();
        this.root.appendChild(divider);
    }

    public Configure(pageTitle: string, pageCategory: string, pageSubtitle: string = "")
    {
        this.pageName.textContent = pageTitle;
        this.category.textContent = pageCategory;
        if (pageSubtitle != "")
        {
            const subtitle: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            subtitle.textContent = pageSubtitle;
            subtitle.classList.add("content-page__subtitle");
            this.titlesDiv.appendChild(subtitle);
        }
    }
}