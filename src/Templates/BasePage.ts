import { Header } from './Header.ts';

export class BasePage extends HTMLDivElement
{
    protected header: Header;
    protected content: HTMLDivElement;
    protected contentPages: Map<string, HTMLElement> = new Map<string, HTMLElement>;
    protected currentPage: HTMLElement | null = null;

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

    public ChangePage(pageName: string, pushHistory: boolean) : HTMLElement | null
    {
        if (this.contentPages.has(pageName))
        {
            const page: HTMLElement = this.contentPages.get(pageName)!;
            if (this.currentPage == page)
            {
                return null;
            }
            this.content.innerHTML = "";
            this.content.appendChild(page)
            if (pushHistory)
            {
                window.history.pushState(pageName, '', `#${pageName}`);
            }
            this.currentPage = page;
            return page;
        }

        return null;
    }
}