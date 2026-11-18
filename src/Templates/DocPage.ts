import '../Documentation.css';
import "./DocPage.css";
import { BasePage } from './BasePage.ts';
import { HeaderSection } from "./Header.ts";
import { NavigationColumn } from './NavigationColumn.ts';
import { TableOfContents } from './TableOfContents.ts';

export class DocPage extends BasePage
{
    private navigationDiv!: HTMLDivElement;
    private navigationColumn!: NavigationColumn;
    private navigationButton!: HTMLButtonElement;
    private tableOfContentsDiv!: HTMLDivElement;
    private tableOfContents!: TableOfContents;
    private tableOfContentsButton!: HTMLButtonElement;

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
        this.navigationDiv.classList.add("doc-page__drawer-left");
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
        this.tableOfContentsDiv.classList.add("doc-page__drawer-right");
        postHeader.appendChild(this.tableOfContentsDiv);

        this.tableOfContents = document.createElement("table-of-contents") as TableOfContents;
        this.tableOfContents.Init();
        this.tableOfContentsDiv.appendChild(this.tableOfContents);

        this.navigationButton = document.createElement("button");
        this.navigationButton.textContent = "Navigation";
        this.navigationButton.classList.add("header-button");
        this.navigationButton.addEventListener("click", () =>
        {
            this.ToggleNavigation();
        });
        this.header.AddElement(HeaderSection.Center, this.navigationButton);

        this.tableOfContentsButton = document.createElement("button");
        this.tableOfContentsButton.textContent = "Contents";
        this.tableOfContentsButton.classList.add("header-button");
        this.tableOfContentsButton.addEventListener("click", () =>
        {
            this.ToggleTableOfContents();
        });
        this.header.AddElement(HeaderSection.Center, this.tableOfContentsButton);

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        mediaQuery.addEventListener('change', (evt: MediaQueryListEvent) =>
        {
            if (evt.matches)
            {
                this.navigationDiv.classList.remove("open");
                this.navigationButton.classList.remove("open");
                this.tableOfContentsDiv.classList.remove("open");
                this.tableOfContentsButton.classList.remove("open");
            }
        });
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
        if (window.matchMedia("(max-width: 768px)").matches)
        {
            this.navigationDiv.classList.remove("open");
            this.navigationButton.classList.remove("open");
            this.tableOfContentsDiv.classList.remove("open");
            this.tableOfContentsButton.classList.remove("open");
        }
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
        this.tableOfContents.Populate(startElement!, () =>
        {
            if (window.matchMedia("(max-width: 768px)").matches)
            {
                this.navigationDiv.classList.remove("open");
                this.navigationButton.classList.remove("open");
                this.tableOfContentsDiv.classList.remove("open");
                this.tableOfContentsButton.classList.remove("open");
            }
        });
    }

    public ToggleNavigation()
    {
        if (this.navigationDiv.classList.contains("open"))
        {
            this.navigationDiv.classList.remove("open");
            this.navigationButton.classList.remove("open");
        }
        else
        {
            this.navigationDiv.classList.add("open");
            this.navigationButton.classList.add("open");
            if (window.matchMedia("(max-width: 768px)").matches)
            {
                this.tableOfContentsDiv.classList.remove("open");
                this.tableOfContentsButton.classList.remove("open");
            }
        }
    }

    public ToggleTableOfContents()
    {
        if (this.tableOfContentsDiv.classList.contains("open"))
        {
            this.tableOfContentsDiv.classList.remove("open");
            this.tableOfContentsButton.classList.remove("open");
        }
        else
        {
            this.tableOfContentsDiv.classList.add("open");
            this.tableOfContentsButton.classList.add("open");
            if (window.matchMedia("(max-width: 768px)").matches)
            {
                this.navigationDiv.classList.remove("open");
                this.navigationButton.classList.remove("open");
            }
        }
    }

    public AddHeaderElement(section:number, element: HTMLElement)
    {
        this.header.AddElement(section, element);
    }
}