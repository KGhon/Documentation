import "../Documentation.css";

export class Header extends HTMLDivElement
{
    public constructor()
    {
        super();
        this.style.width = "100vw";
        this.style.minHeight = "var(--header-height)";
        this.style.display = "flex";
        this.style.flexDirection = "row";
        this.style.position = "sticky";
        this.style.top = "0";
        this.style.height = "var(--header-height)";
        this.style.maxHeight = "var(--header-height)";
        this.style.boxSizing = "border-box";
        this.style.borderStyle = "solid";
        this.style.borderWidth = "2px";
        this.style.borderColor = "var(--border-color)";
        this.style.backgroundColor = "var(--header-bg-color)";

        const homeButton: HTMLButtonElement = document.createElement("button");
        homeButton.style.fontSize = "24px";
        homeButton.textContent = "Home";
        homeButton.style.borderStyle = "solid";
        homeButton.style.borderColor = "transparent";
        homeButton.style.color = "var(--text-color";
        homeButton.style.backgroundColor = "transparent";
        homeButton.addEventListener("mouseover", () =>
        {
            homeButton.style.cursor = "pointer";
            homeButton.style.backgroundColor = "#4F4F4F";
        });
        homeButton.addEventListener("mouseout", () =>
        {
            homeButton.style.backgroundColor = "transparent";
        });
        homeButton.addEventListener("click", () =>
        {
            window.location.href = `${import.meta.env.BASE_URL}`;
        });
        this.appendChild(homeButton);
    }
}