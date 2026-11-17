export class Divider extends HTMLElement
{
    private root!: HTMLDivElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.appendChild(this.root);

        this.root.style.height = "2px";
        this.root.style.backgroundColor = "white";
    }
}