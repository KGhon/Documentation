import "../../../Documentation.css"
import { CodeBlock } from "../../../Templates/CodeBlock.ts";
import * as textContent from "../../../../data/Godot/TwineAnalyzer-text-generated.json";

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

    const guideSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    guideSection.innerHTML = 'Guide';

    const navigationSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    navigationSection.innerHTML = 'Navigation';

    const navigation: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    navigation.innerHTML = textContent.Navigation;

    const additionalContextMenuSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    additionalContextMenuSection.innerHTML = 'Additional Context Menu Items';

    const additionalContextMenu: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    additionalContextMenu.innerHTML = textContent.AdditionalContextMenuItems;

    const featuresSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    featuresSection.innerHTML = 'Features';

    const features: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    features.innerHTML = textContent.Features;

    const exportSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    exportSection.innerHTML = 'Export';

    const exporting: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    exporting.innerHTML = textContent.Export;

    const twineMarkupSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    twineMarkupSection.innerHTML = 'Twine Markup';

    const twineMarkup: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    twineMarkup.innerHTML = textContent.TwineMarkup;

    const variableSheetSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    variableSheetSection.innerHTML = 'Variable Sheet';

    const variableSheet: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    variableSheet.innerHTML = textContent.VariableSheet;

    const variableSheetExample: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    variableSheetExample.Configure(textContent.VariableSheetExample, false, false, "", 2, "20px 0px 0px 0px", "10px");

    const speakerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    speakerSection.innerHTML = 'Speaker';

    const speaker: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    speaker.innerHTML = textContent.Speaker;

    const speakerExample: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block"})) as CodeBlock;
    speakerExample.Configure(textContent.SpeakerExample, false, false, "", 2, "20px 0px 0px 0px", "10px");

    const receiverSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    receiverSection.innerHTML = 'Receiver';

    const receiver: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    receiver.innerHTML = textContent.Receiver;

    const receiverExample: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    receiverExample.Configure(textContent.ReceiverExample, false, false, "", 2, "20px 0px 0px 0px", "10px");

    const descriptionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    descriptionsSection.innerHTML = 'Descriptions';

    const descriptions: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    descriptions.innerHTML = textContent.Descriptions;

    const descriptionExample: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    descriptionExample.Configure(textContent.DescriptionExample, false, false, "", 2, "20px 0px 0px 0px", "10px");

    const directionSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    directionSection.innerHTML = 'Directions';

    const direction: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    direction.innerHTML = textContent.Directions;

    const directionExample: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    directionExample.Configure(textContent.DirectionExample, false, false, "", 2, "20px 0px 0px 0px", "10px");

    const locationsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    locationsSection.innerHTML = 'Locations';

    const locations: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    locations.innerHTML = textContent.Locations;

    const locationExample: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    locationExample.Configure(textContent.LocationExample, false, false, "", 2, "20px 0px 0px 0px", "10px");

    const twineBatchExporterSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    twineBatchExporterSection.innerHTML = 'Twine Batch Exporter';

    const twineBatchExporter: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    twineBatchExporter.innerHTML = textContent.TwineBatchExporter;

    return root;
}
