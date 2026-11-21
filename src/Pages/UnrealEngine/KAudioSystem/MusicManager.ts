import "../../../Documentation.css"
import { ContentPage } from "../../../Templates/ContentPage.ts";
import { Table } from "../../../Templates/Table.ts";
import * as textContent from "../../../../generated/MusicManager-text-generated.json";
import * as code from "../../../../generated/MusicManager-code-generated.json";

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

    const propertiesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    propertiesSection.innerHTML = "Properties";

    const properties: Table = root.appendChild(document.createElement("table-element")) as Table;
    properties.Init();
    properties.Configure(code.Properties);

    const publicFunctionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    publicFunctionsSection.innerHTML = "Public Functions";

    const publicFunctions: Table = root.appendChild(document.createElement("table-element")) as Table;
    publicFunctions.Init();
    publicFunctions.Configure(code.PublicFunctions);

    return root;
}
