import "../../../Documentation.css"
import { ContentPage } from "../../../Templates/ContentPage.ts";
import { Table } from "../../../Templates/Table.ts";
import * as textContent from "../../../../generated/DialogueTree-text-generated.json";
import * as code from "../../../../generated/DialogueTree-code-generated.json";

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

    const publicFunctionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    publicFunctionsSection.innerHTML = "Public Functions";

    const publicFunctions: Table = root.appendChild(document.createElement("table-element")) as Table;
    publicFunctions.Init();
    publicFunctions.Configure(code.PublicFunctions);

    const protectedFunctionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    protectedFunctionsSection.innerHTML = "Protected Functions";

    const protectedFunctions: Table = root.appendChild(document.createElement("table-element")) as Table;
    protectedFunctions.Init();
    protectedFunctions.Configure(code.ProtectedFunctions);

    const bindableEventsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    bindableEventsSection.innerHTML = "Bindable Events";

    const bindableEvents: Table = root.appendChild(document.createElement("table-element")) as Table;
    bindableEvents.Init();
    bindableEvents.Configure(code.BindableEvents);

    return root;
}
