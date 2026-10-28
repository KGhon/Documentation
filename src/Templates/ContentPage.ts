import "../Documentation.css";

export class ContentPage extends HTMLDivElement
{
    private titles: HTMLDivElement;
    private titleDiv: HTMLParagraphElement;
    private category: HTMLParagraphElement;

    public constructor()
    {
        super();
        const header: HTMLDivElement = this.appendChild(document.createElement("div")) as HTMLDivElement;
        header.style.display = "flex";
        header.style.justifyContent = "space-between";

        this.titles = header.appendChild(document.createElement("div")) as HTMLDivElement;
        this.titles.style.display = "flex";
        this.titles.style.flexDirection = "column";

        this.titleDiv = this.titles.appendChild(Object.assign(document.createElement("p"), { className: "c0" })) as HTMLParagraphElement;

        this.category = header.appendChild(document.createElement("p")) as HTMLParagraphElement;
        this.category.style.display = "flex";
        this.category.style.flexDirection = "column";
        this.category.style.justifyContent = "flex-end";
        this.category.style.fontSize = "24px";

        this.appendChild(document.createElement('div', { is: 'divider-element' }));
    }

    public Configure(pageTitle: string, pageCategory: string, pageSubtitle: string = "")
    {
        this.titleDiv.innerHTML = pageTitle;
        this.category.innerHTML = pageCategory;
        if (pageSubtitle != "")
        {
            const subtitle: HTMLParagraphElement = this.titles.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
            subtitle.innerHTML = pageSubtitle;
        }
    }
}