import '../Documentation.css';
import { BasePage } from './BasePage.ts';
import { NavigationColumn } from './NavigationColumn.ts';
import { TableOfContents } from './TableOfContents.ts';

export class DocPage extends BasePage
{
    private navigationColumn: NavigationColumn;
    private tableOfContents: TableOfContents;

    public constructor()
    {
        super();

        const postHeader: HTMLDivElement = document.createElement('div');
        postHeader.style.margin = "0";
        postHeader.style.padding = "0";
        postHeader.style.display = "flex";
        postHeader.style.flexGrow = "1";
        postHeader.style.flexDirection = "row";
        postHeader.style.backgroundColor = "var(--bg-color)";
        this.appendChild(postHeader);

        const navigationDiv: HTMLDivElement = document.createElement('div');
        navigationDiv.style.flexDirection = "column";
        navigationDiv.style.width = "25%";
        postHeader.appendChild(navigationDiv);

        this.navigationColumn = document.createElement('div', { is: 'navigation-column' }) as NavigationColumn;
        navigationDiv.appendChild(this.navigationColumn);

        this.content = document.createElement('div');
        this.content.style.padding = "20px";
        this.content.style.flexDirection = "column";
        this.content.style.width = "100%";
        postHeader.appendChild(this.content);

        const tableOfContentsDiv: HTMLDivElement = document.createElement('div');
        tableOfContentsDiv.style.flexDirection = "column";
        tableOfContentsDiv.style.width = "25%";
        postHeader.appendChild(tableOfContentsDiv);

        this.tableOfContents = document.createElement('div', { is: 'table-of-contents' }) as TableOfContents;
        tableOfContentsDiv.appendChild(this.tableOfContents);
    }

    public ChangePage(pageName: string, pushHistory: boolean) : HTMLElement | null
    {
        const currentPage: HTMLElement | null = super.ChangePage(pageName, pushHistory);
        if (currentPage == null)
        {
            return null;
        }

        this.PopulateTableOfContents(pageName, currentPage);
        window.scrollTo({ top: 0, behavior: "instant" });
        return currentPage;
    }

    public SetNavigationPageName(name: string)
    {
        this.navigationColumn.SetPageName(name);
    }

    public PopulateNavigation(items: [string, string, boolean, boolean][])
    {
        this.navigationColumn.Populate(items, (pageName, pushHistory) => this.ChangePage(pageName, pushHistory));
    }

    private PopulateTableOfContents(pageName: string, startElement: HTMLElement | null)
    {
        if (startElement == null)
        {
            return;
        }
        this.tableOfContents.SetPageName(pageName);
        this.tableOfContents.Populate(startElement!);
    }
}