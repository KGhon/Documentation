import "../Documentation.css";

export class Header extends HTMLDivElement
{
    private left!: HTMLDivElement;
    private center!: HTMLDivElement;
    private right!: HTMLDivElement;

    public connectedCallback()
    {
        this.style.width = "100vw";
        this.style.minHeight = "var(--header-height)";
        this.style.display = "grid";
        this.style.gridTemplateColumns = "1fr auto 1fr";
        this.style.alignItems = "center";
        this.style.position = "sticky";
        this.style.top = "0";
        this.style.height = "var(--header-height)";
        this.style.maxHeight = "var(--header-height)";
        this.style.boxSizing = "border-box";
        this.style.borderStyle = "solid";
        this.style.borderWidth = "2px";
        this.style.borderColor = "var(--border-color)";
        this.style.backgroundColor = "var(--header-bg-color)";

        this.left = document.createElement("div");
        this.left.style.display = "flex";
        this.left.style.flexDirection = "row";
        this.left.style.alignItems = "center";
        this.appendChild(this.left);

        this.center = document.createElement("div");
        this.center.style.display = "flex";
        this.center.style.flexDirection = "row";
        this.center.style.alignItems = "center";
        this.appendChild(this.center);

        this.right = document.createElement("div");
        this.right.style.display = "flex";
        this.right.style.flexDirection = "row";
        this.right.style.alignItems = "center";
        this.appendChild(this.right);

        const homeButton: HTMLButtonElement = document.createElement("button");
        homeButton.textContent = "Home";
        homeButton.classList.add("header-button");
        homeButton.addEventListener("click", () =>
        {
            window.location.href = `${import.meta.env.BASE_URL}`;
        });
        this.left.appendChild(homeButton);
    }

    public AddElement(element: HTMLElement)
    {
        this.center.appendChild(element);
    }
}