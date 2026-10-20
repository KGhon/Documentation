import '../Documentation.css';
import { BasePage } from './BasePage.ts';
import { NavigationColumn } from './NavigationColumn.ts';
import { TableOfContents } from './TableOfContents.ts';

export class DocPage extends BasePage
{
    public navigation: HTMLDivElement;
    public content: HTMLDivElement;
    public tableOfContents: HTMLDivElement;

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

        this.navigation = document.createElement('div');
        this.navigation.style.flexDirection = "column";
        this.navigation.style.width = "30%";
        postHeader.appendChild(this.navigation);

        this.content = document.createElement('div');
        this.content.style.padding = "20px";
        this.content.style.flexDirection = "column";
        this.content.style.width = "100%";
        postHeader.appendChild(this.content);

        this.tableOfContents = document.createElement('div');
        this.tableOfContents.style.flexDirection = "column";
        this.tableOfContents.style.width = "25%";
        postHeader.appendChild(this.tableOfContents);
    }

    public connectedCallback()
    {
        const navigationColumn: NavigationColumn = document.createElement('div', { is: 'navigation-column' }) as NavigationColumn;
        this.navigation.appendChild(navigationColumn);

        const tableOfContents: TableOfContents = document.createElement('div', { is: 'table-of-contents' }) as TableOfContents;
        tableOfContents.SetTitle(document.title);
        this.tableOfContents.appendChild(tableOfContents);
    }
}