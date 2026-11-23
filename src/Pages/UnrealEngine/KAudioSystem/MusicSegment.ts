import "../../../Documentation.css"
import { ContentPage } from "../../../Templates/ContentPage.ts";
//import { Table } from "../../../Templates/Table.ts";
import * as textContent from "../../../../generated/MusicSegment-text-generated.json";
//import * as code from "../../../../generated/MusicSegment-code-generated.json";

export function Construct(): HTMLElement
{
    const root: ContentPage = document.createElement("content-page") as ContentPage;
    root.Init();
    root.Configure(textContent.Title);

    const definitions: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    definitions.innerHTML = textContent.Definitions;

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = "Overview";
    
    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML = textContent.Overview;

    return root;
}
