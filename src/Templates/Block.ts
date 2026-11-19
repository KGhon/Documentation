import "../Documentation.css";
import "./Block.css";

export class Block extends HTMLElement
{
    private root!: HTMLDivElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.root.classList.add("block__root");
        this.appendChild(this.root);
    }

    public SetText(text: string)
    {
        this.root.textContent = text;
    }

    public AddElement(element: HTMLElement)
    {
        this.root.appendChild(element);
    }
}