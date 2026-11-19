import "./Divider.css";

export class Divider extends HTMLElement
{
    private root!: HTMLDivElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.root.classList.add("divider__root");
        this.appendChild(this.root);
    }
}