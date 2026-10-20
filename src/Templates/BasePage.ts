import { Header } from './Header.ts';

export class BasePage extends HTMLDivElement
{
    protected header: Header;
    protected content: HTMLDivElement;
    protected contentPages: Map<string, HTMLElement> = new Map<string, HTMLElement>;

    public constructor()
    {
        super();

        this.style.margin = "0";
        this.style.padding = "0";
        this.style.display = "flex";
        this.style.flexGrow = "1";
        this.style.flexDirection = "column";
        this.style.backgroundColor = "var(--bg-color)";

        this.header = document.createElement('div', { is: 'header-bar' }) as Header;
        this.appendChild(this.header);

        this.content = document.createElement('div');
        this.appendChild(this.content);
    }

    public AddContentPage(name: string, page: HTMLElement)
    {
        this.contentPages.set(name, page);
    }

    public ChangePage(pageName: string) : HTMLElement | null
    {
        if (this.contentPages.has(pageName))
        {
            this.content.innerHTML = "";
            const page: HTMLElement = this.contentPages.get(pageName)!;
            this.content.appendChild(page)
            window.history.pushState(pageName, '', pageName);
            return page;
        }

        return null;
    }
}