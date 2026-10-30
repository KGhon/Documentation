import "../../../../Documentation.css"
import { ContentPage } from "../../../../Templates/ContentPage.ts";
import { Table } from "../../../../Templates/Table.ts";
import * as textContent from "../../../../../generated/Boards-text-generated.json";
import * as content from "../../../../../data/Godot/KDocumentationTools/Boards/Boards.json";

export function Construct(): HTMLDivElement
{
    const root: ContentPage = document.createElement("div", { is: "content-page" }) as ContentPage;
    root.Configure(textContent.Title, textContent.Category);

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = 'Overview';

    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML = textContent.Overview;

    const dependenciesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    dependenciesSection.innerHTML = 'Dependencies';

    const dependencies: HTMLUListElement = root.appendChild(Object.assign(document.createElement("ul"), { className: "c4", style: "white-space: normal" })) as HTMLUListElement;
    dependencies.innerHTML = textContent.Dependencies;

    const guideSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    guideSection.innerHTML = 'Guide';

    const gettingStartedSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    gettingStartedSection.innerHTML = 'Getting Started';

    const gettingStarted: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    gettingStarted.innerHTML = textContent.GettingStarted;

    const widgetsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    widgetsSection.innerHTML = 'Widgets';

    const widgetsTable: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    widgetsTable.Configure(content.Widgets);

    const makingCustomWidgetsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    makingCustomWidgetsSection.innerHTML = 'Making Custom Widgets';

    const makingCustomWidgets: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    makingCustomWidgets.innerHTML = textContent.MakingCustomWidgets;

    const widgetClassSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    widgetClassSection.innerHTML = 'Widget Class';

    const widgetClass: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    widgetClass.innerHTML = textContent.WidgetClass;

    const saveDataClassSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    saveDataClassSection.innerHTML = 'Save Data Class';

    const saveDataClass: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    saveDataClass.innerHTML = textContent.SaveDataClass;

    const widgetSceneSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    widgetSceneSection.innerHTML = 'Widget Scene';

    const widgetScene: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    widgetScene.innerHTML = textContent.WidgetScene;

    const inspectorClassSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    inspectorClassSection.innerHTML = 'Inspector Class';

    const inspectorClass: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    inspectorClass.innerHTML = textContent.WidgetInspectorClass;

    const inspectorSceneSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    inspectorSceneSection.innerHTML = 'Insepctor Scene';

    const inspectorScene: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    inspectorScene.innerHTML = textContent.WidgetInspectorScene;

    return root;
}
