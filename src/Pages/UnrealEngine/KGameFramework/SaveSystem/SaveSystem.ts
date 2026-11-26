import "../../../../Documentation.css"
import { ContentPage } from "../../../../Templates/ContentPage.ts";
import { Table, ColumnSpacing } from "../../../../Templates/Table.ts";
import * as textContent from "../../../../../generated/SaveSystem-text-generated.json";
import * as code from "../../../../../generated/SaveSystem-code-generated.json";

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

    const settingsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    settingsSection.innerHTML = "Settings";

    const settingsLocation: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    settingsLocation.innerHTML = textContent.SettingsLocation;

    const settings: Table = root.appendChild(document.createElement("table-element")) as Table;
    settings.Init();
    settings.Configure(code.Settings);

    const quickReferenceSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    quickReferenceSection.innerHTML = "Quick Reference";

    const quickReference: Table = root.appendChild(document.createElement("table-element")) as Table;
    quickReference.Init();
    quickReference.Configure(textContent.QuickReference);

    const builtInDebugMenusSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    builtInDebugMenusSection.innerHTML = "Built-In Debug Menus";

    const builtInDebugMenus: Table = root.appendChild(document.createElement("table-element")) as Table;
    builtInDebugMenus.Init();
    builtInDebugMenus.Configure(textContent.BuiltInDebugMenus, ColumnSpacing.Compact);

    return root;
}
