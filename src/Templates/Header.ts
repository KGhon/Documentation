import "../Documentation.css";
import "./Header.css";

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
        this.classList.add("header");

        this.root = document.createElement("div");
        this.root.classList.add("header__root");
        this.appendChild(this.root);

        this.left = document.createElement("div");
        this.left.classList.add("header__section");
        this.root.appendChild(this.left);

        this.center = document.createElement("div");
        this.center.classList.add("header__section");
        this.root.appendChild(this.center);

        this.right = document.createElement("div");
        this.right.classList.add("header__section");
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