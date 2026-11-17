import '../Documentation.css';
import { BasePage } from './BasePage.ts';
import { NavigationColumn } from './NavigationColumn.ts';
import { TableOfContents } from './TableOfContents.ts';

export class DocPage extends BasePage
{
    private navigationDiv!: HTMLDivElement;
    private navigationColumn!: NavigationColumn;
    private tableOfContentsDiv!: HTMLDivElement;
    private tableOfContents!: TableOfContents;
    private navigationIsVisible: boolean = true;
    private tableOfContentsIsVisible: boolean = true;

    public Init()
    {
        super.Init();
        const postHeader: HTMLDivElement = document.createElement('div');
        postHeader.style.margin = "0";
        postHeader.style.padding = "0";
        postHeader.style.display = "flex";
        postHeader.style.flexDirection = "row";
        postHeader.style.backgroundColor = "var(--bg-color)";
        this.root.appendChild(postHeader);

        this.navigationDiv = document.createElement('div');
        this.navigationDiv.style.width = "25%";
        this.navigationDiv.style.position = "sticky";
        this.navigationDiv.style.top = "var(--header-height)";
        this.navigationDiv.style.alignSelf = "flex-start";
        this.navigationDiv.style.height = "calc(100vh - var(--header-height))";
        this.navigationDiv.style.maxHeight = "calc(100vh - var(--header-height))";
        this.navigationDiv.style.overflowY = "auto";
        this.navigationDiv.style.overflowX = "hidden";
        this.navigationDiv.style.boxSizing = "border-box";
        postHeader.appendChild(this.navigationDiv);

        this.navigationColumn = document.createElement("navigation-column") as NavigationColumn;
        this.navigationColumn.Init();
        this.navigationDiv.appendChild(this.navigationColumn);

        this.content = document.createElement('div');
        this.content.style.padding = "16px";
        this.content.style.flexDirection = "column";
        this.content.style.width = "100%";
        this.content.style.boxSizing = "border-box";
        postHeader.appendChild(this.content);

        this.tableOfContentsDiv = document.createElement('div');
        this.tableOfContentsDiv.style.width = "25%";
        this.tableOfContentsDiv.style.position = "sticky";
        this.tableOfContentsDiv.style.top = "var(--header-height)";
        this.tableOfContentsDiv.style.alignSelf = "flex-start";
        this.tableOfContentsDiv.style.height = "calc(100vh - var(--header-height))";
        this.tableOfContentsDiv.style.maxHeight = "calc(100vh - var(--header-height))";
        this.tableOfContentsDiv.style.overflowY = "auto";
        this.tableOfContentsDiv.style.overflowX = "hidden";
        this.tableOfContentsDiv.style.boxSizing = "border-box";
        postHeader.appendChild(this.tableOfContentsDiv);

        this.tableOfContents = document.createElement("table-of-contents") as TableOfContents;
        this.tableOfContents.Init();
        this.tableOfContentsDiv.appendChild(this.tableOfContents);

        const toggleNavigation: HTMLButtonElement = document.createElement("button");
        toggleNavigation.textContent = "Navigation";
        toggleNavigation.style.color = "#C97CFC";
        toggleNavigation.classList.add("header-button");
        toggleNavigation.addEventListener("click", () =>
        {
            this.ToggleNavigation();
            if (this.navigationIsVisible)
            {
                toggleNavigation.style.color = "#C97CFC";
            }
            else
            {
                toggleNavigation.style.color = "inherit";
            }
        });
        this.header.AddElement(toggleNavigation);

        const toggleTableOfContents: HTMLButtonElement = document.createElement("button");
        toggleTableOfContents.textContent = "Contents";
        toggleTableOfContents.style.color = "#C97CFC";
        toggleTableOfContents.classList.add("header-button");
        toggleTableOfContents.addEventListener("click", () =>
        {
            this.ToggleTableOfContents();
            if (this.tableOfContentsIsVisible)
            {
                toggleTableOfContents.style.color = "#C97CFC";
            }
            else
            {
                toggleTableOfContents.style.color = "inherit";
            }
        });
        this.header.AddElement(toggleTableOfContents);
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

    public ToggleNavigation()
    {
        if (this.navigationIsVisible)
        {
            this.navigationDiv.style.display = "none";
            this.navigationIsVisible = false;
        }
        else
        {
            this.navigationDiv.style.display = "";
            this.navigationIsVisible = true;
        }
    }

    public ToggleTableOfContents()
    {
        if (this.tableOfContentsIsVisible)
        {
            this.tableOfContentsDiv.style.display = "none";
            this.tableOfContentsIsVisible = false;
        }
        else
        {
            this.tableOfContentsDiv.style.display = "";
            this.tableOfContentsIsVisible = true;
        }
    }

    public AddHeaderElement(element: HTMLElement)
    {
        this.header.AddElement(element);
    }
}