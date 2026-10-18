import '../Documentation.css';

export class DocPage extends HTMLDivElement
{
    public pages: HTMLDivElement;
    public content: HTMLDivElement;
    public tableOfContents: HTMLDivElement;

    constructor()
    {
        super();
        this.pages = document.createElement('div');
        this.pages.style.flexDirection = "column";
        this.pages.style.width = "100%";
        this.appendChild(this.pages);
        this.content = document.createElement('div');
        this.content.style.flexDirection = "column";
        this.content.style.width = "100%";
        this.appendChild(this.content);
        this.tableOfContents = document.createElement('div');
        this.tableOfContents.style.flexDirection = "column";
        this.tableOfContents.style.width = "100%";
        this.appendChild(this.tableOfContents);
        const text1: HTMLDivElement = document.createElement('div');
        text1.textContent = "Column 1";
        text1.style.textAlign = "center";
        this.pages.appendChild(text1);
        const text2: HTMLDivElement = document.createElement('div');
        text2.textContent = "Column 2";
        text2.style.textAlign = "center";
        this.content.appendChild(text2);
        const text3: HTMLDivElement = document.createElement('div');
        text3.textContent = "Column 3";
        text3.style.textAlign = "center"
        this.tableOfContents.appendChild(text3);
        this.classList.add("doc-page");
    }
}