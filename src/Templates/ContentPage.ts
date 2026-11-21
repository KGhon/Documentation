import "../Documentation.css";
import "./ContentPage.css";
import sanitizeHtml from "sanitize-html";
import { Divider } from "./Divider.ts";

export class ContentPage extends HTMLElement
{
    private root!: HTMLDivElement;
    private pageName!: HTMLDivElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.root.classList.add("content-page__root");
        this.append(this.root);

        this.pageName = document.createElement("div") as HTMLDivElement;
        this.pageName.classList.add("c0");
        this.root.appendChild(this.pageName);

        const divider: Divider = document.createElement("divider-element") as Divider;
        divider.Init();
        this.root.appendChild(divider);
    }

    public Configure(pageTitle: string)
    {
        this.pageName.textContent = sanitizeHtml(pageTitle, { allowedTags: [], allowedAttributes: {} });
    }

    public override appendChild<T extends Node>(node: T): T
    {
        return this.root.appendChild(node);
    }
}