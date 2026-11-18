import "../Documentation.css";

export const HeaderSection = {
    Left: 0,
    Center: 1,
    Right: 2
} as const

export class Header extends HTMLElement
{
    private root!: HTMLDivElement;
    private left!: HTMLDivElement;
    private center!: HTMLDivElement;
    private right!: HTMLDivElement;

    public Init()
    {
        this.style.width = "100vw";
        this.style.minHeight = "var(--header-height)";
        this.style.position = "sticky";
        this.style.top = "0";
        this.style.height = "var(--header-height)";
        this.style.maxHeight = "var(--header-height)";

        this.root = document.createElement("div");
        this.root.style.display = "grid";
        this.root.style.gridTemplateColumns = "1fr auto 1fr";
        this.root.style.alignItems = "center";
        this.root.style.boxSizing = "border-box";
        this.root.style.borderStyle = "solid";
        this.root.style.borderWidth = "2px";
        this.root.style.borderColor = "var(--border-color)";
        this.root.style.backgroundColor = "var(--header-bg-color)";
        this.appendChild(this.root);

        this.left = document.createElement("div");
        this.left.style.display = "flex";
        this.left.style.flexDirection = "row";
        this.left.style.alignItems = "center";
        this.root.appendChild(this.left);

        this.center = document.createElement("div");
        this.center.style.display = "flex";
        this.center.style.flexDirection = "row";
        this.center.style.alignItems = "center";
        this.root.appendChild(this.center);

        this.right = document.createElement("div");
        this.right.style.display = "flex";
        this.right.style.flexDirection = "row";
        this.right.style.alignItems = "center";
        this.root.appendChild(this.right);

        const homeButton: HTMLButtonElement = document.createElement("button");
        homeButton.textContent = "Home";
        homeButton.classList.add("header-button");
        homeButton.addEventListener("click", () =>
        {
            window.location.href = `${import.meta.env.BASE_URL}`;
        });
        this.left.appendChild(homeButton);
    }

    public AddElement(section: number, element: HTMLElement)
    {
        switch (section)
        {
            case HeaderSection.Left:
                this.left.appendChild(element);
                break;
            case HeaderSection.Center:
                this.center.appendChild(element);
                break;
            case HeaderSection.Right:
                this.right.appendChild(element);
                break;
        }
    }
}