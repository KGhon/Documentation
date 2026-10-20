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
        this.style.borderStyle = "solid";
        this.style.borderWidth = "2px";
        this.style.borderColor = "var(--border-color)";
        this.style.backgroundColor = "var(--header-bg-color)";
    }

    public connectedCallback()
    {

    }
}