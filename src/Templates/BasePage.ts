import "./BasePage.css";
import { Header } from './Header.ts';

export class BasePage extends HTMLElement
{
    protected root!: HTMLDivElement;
    protected header!: Header;
    protected content!: HTMLDivElement;
    protected contentPages: Map<string, HTMLElement> = new Map<string, HTMLElement>;
    protected currentPage: HTMLElement | null = null;

    public Init()
    {
        this.classList.add("base-page");

        this.root = document.createElement("div");
        this.root.classList.add("base-page__root");
        this.appendChild(this.root);

        this.header = document.createElement("header-bar") as Header;
        this.header.Init();
        this.root.appendChild(this.header);

        this.content = document.createElement('div');
        this.root.appendChild(this.content);
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