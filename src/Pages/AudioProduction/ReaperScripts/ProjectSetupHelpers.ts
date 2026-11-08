import "../../../Documentation.css"
import { ContentPage } from "../../../Templates/ContentPage.ts";
import { Table } from "../../../Templates/Table.ts";
import * as textContent from "../../../../generated/ProjectSetupHelpers-text-generated.json";
import * as content from "../../../../data/AudioProduction/ReaperScripts/ProjectSetupHelpers/ProjrectSetupHelpers.json";

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

    const soundDesignSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    soundDesignSection.innerHTML = 'Sound Design';

    const generateTracksFromCSVSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    generateTracksFromCSVSection.innerHTML = 'Generate Tracks From CSV';

    const generateTracksFromCSV: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    generateTracksFromCSV.innerHTML = textContent.GenerateTracksFromCSV;

    const generateTracksFromCSVTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    generateTracksFromCSVTable.Configure(content.GenerateTracksFromCSV);

    const generateRegionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    generateRegionsSection.innerHTML = 'Generate Regions';

    const generateRegions: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    generateRegions.innerHTML = textContent.GenerateRegions;

    const generateRegionsTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    generateRegionsTable.Configure(content.GenerateRegions);

    const generalSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    generalSection.innerHTML = 'General';

    const generateMarkersFromCSVSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    generateMarkersFromCSVSection.innerHTML = 'Generate Markers From CSV';

    const generateMarkersFromCSV: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    generateMarkersFromCSV.innerHTML = textContent.GenerateMarkersFromCSV;

    const generateMarkersFromCSVTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    generateMarkersFromCSVTable.Configure(content.GenerateMarkersFromCSV);

    const voiceoverSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    voiceoverSection.innerHTML = 'Voiceover';

    const generateVOTracksFromCSVSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    generateVOTracksFromCSVSection.innerHTML = 'Generate Tracks From CSV';

    const generateVOTracksFromCSV: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    generateVOTracksFromCSV.innerHTML = textContent.GenerateVOTracksFromCSV;

    const generateVOTracksFromCSVTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    generateVOTracksFromCSVTable.Configure(content.GenerateTracksFromCSV);

    const affixSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    affixSection.innerHTML = 'Affix Selected Track Names';

    const affix: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    affix.innerHTML = textContent.Affix;

    const affixTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    affixTable.Configure(content.Affix);

    const removeAffixSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    removeAffixSection.innerHTML = 'Remove Affix From Selected Track Names';

    const removeAffix: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    removeAffix.innerHTML = textContent.RemoveAffix;

    const removeAffixTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    removeAffixTable.Configure(content.RemoveAffix);

    const voiceoverFileSplittingTipSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    voiceoverFileSplittingTipSection.innerHTML = 'Voiceover File Splitting Tip';

    const voiceoverFileSplittingTip: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    voiceoverFileSplittingTip.innerHTML = textContent.VoiceoverFileSplittingTip;

    return root;
}
