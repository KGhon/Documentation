import "../../../Documentation.css"
import { Table } from "../../../Templates/Table.ts";
import * as textContent from "../../../../data/AudioProduction/MIDIMixingTool-text-generated.json"
import * as content from "../../../../data/AudioProduction/MIDIMixingTool.json";

const root: HTMLDivElement = document.createElement("div");
export function Construct(): HTMLDivElement
{
    const title: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c0" })) as HTMLParagraphElement;
    title.innerHTML = textContent.Title;

    root.appendChild(document.createElement('div', { is: 'divider-element' }));

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = 'Overview';

    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML = textContent.Overview;

    const dependenciesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    dependenciesSection.innerHTML = 'Dependencies';

    const dependencies: HTMLUListElement = root.appendChild(Object.assign(document.createElement("ul"), { className: "c4", style: "white-space: normal" })) as HTMLUListElement;
    dependencies.innerHTML = textContent.Dependencies;

    const howItWorksSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    howItWorksSection.innerHTML = 'How It Works';

    const howItWorks: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    howItWorks.innerHTML = textContent.HowItWorks;

    const setupSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    setupSection.innerHTML = 'Setup';

    const setup: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    setup.innerHTML = textContent.Setup;

    const setupTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    setupTable.Configure(content.Setup);

    const helpersSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    helpersSection.innerHTML = 'Helpers';

    const helpers: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    helpers.innerHTML = textContent.Helpers;

    const helpersTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    helpersTable.Configure(content.Helpers);

    const midiGenerationSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    midiGenerationSection.innerHTML = 'MIDI Generation';

    const midiGeneration: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    midiGeneration.innerHTML = textContent.MIDIGeneration;

    const midiGenerationTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    midiGenerationTable.Configure(content.MIDIGeneration);

    const exportStrategiesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    exportStrategiesSection.innerHTML = 'Export Strategies';

    const exportWithTailsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    exportWithTailsSection.innerHTML = 'Export With Tails';

    const exporWithTails: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    exporWithTails.innerHTML = textContent.ExportWithTails;

    const exportWithoutTailsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    exportWithoutTailsSection.innerHTML = 'Export Without Tails';

    const exportWithoutTails: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    exportWithoutTails.innerHTML = textContent.ExportWithoutTails;

    return root;
}
