import "../../../Documentation.css"
import { ContentPage } from "../../../Templates/ContentPage.ts";
import { Table } from "../../../Templates/Table.ts";
import * as textContent from "../../../../generated/KAudioSystemStatics-text-generated.json";
import * as code from "../../../../generated/KAudioSystemStatics-code-generated.json";

export function Construct(): HTMLDivElement
{
    const root: ContentPage = document.createElement("div", { is: "content-page" }) as ContentPage;
    root.Configure(textContent.Title, textContent.Category, textContent.Inheritance);

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = 'Overview';
    
    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML = textContent.Overview;

    const publicFunctionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    publicFunctionsSection.innerHTML = 'Public Functions';

    const publicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    publicFunctions.Configure(code.PublicFunctions);

    return root;
}
