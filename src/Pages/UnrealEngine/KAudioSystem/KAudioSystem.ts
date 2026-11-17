import "../../../Documentation.css"
import { ContentPage } from "../../../Templates/ContentPage.ts";
import { Table, ColumnSpacing } from "../../../Templates/Table.ts";
import * as textContent from "../../../../generated/KAudioSystem-text-generated.json";

export function Construct(): HTMLDivElement
{
    const root: ContentPage = document.createElement("div", { is: "content-page" }) as ContentPage;
    root.Configure(textContent.Title, textContent.Category);

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = 'Overview';
    
    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML = textContent.Overview;

    const guideSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    guideSection.innerHTML = 'Guide';

    const gameplayParametersSystemSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    gameplayParametersSystemSection.innerHTML = 'Gameplay Parameters System';

    const gameplayParametersSystemClasses: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    gameplayParametersSystemClasses.Configure(textContent.GameplayParametersSystemClasses, ColumnSpacing.Compact);
    /*
    const dependenciesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    dependenciesSection.innerHTML = 'Dependencies';

    const dependencies: HTMLUListElement = root.appendChild(Object.assign(document.createElement("ul"), { className: "c4", style: "white-space: normal" })) as HTMLUListElement;
    dependencies.innerHTML = textContent.Dependencies;

    const guideSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    guideSection.innerHTML = 'Guide';

    const setupSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    setupSection.innerHTML = 'Setup';

    const setup: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    setup.innerHTML = textContent.Setup;

    const usageSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    usageSection.innerHTML = 'Usage';

    const usage: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    usage.innerHTML = textContent.Usage;
    */
    return root;
}
