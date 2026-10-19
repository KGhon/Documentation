import '../Documentation.css';

export class DocPage extends HTMLDivElement
{
    public navigation: HTMLDivElement;
    public content: HTMLDivElement;
    public tableOfContents: HTMLDivElement;

    public constructor()
    {
        super();

        this.style.margin = "0";
        this.style.padding = "0";
        this.style.display = "flex";
        this.style.flexGrow = "1";
        this.style.flexDirection = "row";
        this.style.backgroundColor = "var(--bg-color)";

        this.navigation = document.createElement('div');
        this.navigation.style.flexDirection = "column";
        this.navigation.style.width = "100%";
        this.appendChild(this.navigation);
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
        this.navigation.appendChild(text1);
        const text2: HTMLDivElement = document.createElement('div');
        text2.textContent = "Column 2";
        text2.style.textAlign = "center";
        this.content.appendChild(text2);
        const text3: HTMLDivElement = document.createElement('div');
        text3.textContent = "Column 3";
        text3.style.textAlign = "center"
        this.tableOfContents.appendChild(text3);
    }
}