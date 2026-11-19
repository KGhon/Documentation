import "../../../../Documentation.css"
import { ContentPage } from "../../../../Templates/ContentPage.ts";
import { Block } from "../../../../Templates/Block.ts";
import * as textContent from "../../../../../generated/TwineAnalyzer-text-generated.json";

export function Construct(): HTMLElement
{
    const root: ContentPage = document.createElement("content-page") as ContentPage;
    root.Init();
    root.Configure(textContent.Title, textContent.Category);

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = "Overview";

    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML = textContent.Overview;

    const dependenciesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    dependenciesSection.innerHTML = "Dependencies";

    const dependencies: HTMLUListElement = root.appendChild(Object.assign(document.createElement("ul"), { className: "c4", style: "white-space: normal" })) as HTMLUListElement;
    dependencies.innerHTML = textContent.Dependencies;

    const guideSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    guideSection.innerHTML = "Guide";

    const navigationSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    navigationSection.innerHTML = "Navigation";

    const navigation: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    navigation.innerHTML = textContent.Navigation;

    const additionalContextMenuSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    additionalContextMenuSection.innerHTML = "Additional Context Menu Items";

    const additionalContextMenu: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    additionalContextMenu.innerHTML = textContent.AdditionalContextMenuItems;

    const featuresSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    featuresSection.innerHTML = "Features";

    const features: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    features.innerHTML = textContent.Features;

    const exportSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    exportSection.innerHTML = "Export";

    const exporting: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    exporting.innerHTML = textContent.Export;

    const twineMarkupSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    twineMarkupSection.innerHTML = "Twine Markup";

    const twineMarkup: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    twineMarkup.innerHTML = textContent.TwineMarkup;

    const variableSheetSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    variableSheetSection.innerHTML = "Variable Sheet";

    const variableSheet: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    variableSheet.innerHTML = textContent.VariableSheet;

    const variableSheetExample: Block = root.appendChild(document.createElement("block-element")) as Block;
    variableSheetExample.Init();
    variableSheetExample.SetText(textContent.VariableSheetExample);

    const speakerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    speakerSection.innerHTML = "Speaker";

    const speaker: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    speaker.innerHTML = textContent.Speaker;

    const speakerExample: Block = root.appendChild(document.createElement("block-element")) as Block;
    speakerExample.Init();
    speakerExample.SetText(textContent.SpeakerExample);

    const receiverSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    receiverSection.innerHTML = "Receiver";

    const receiver: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    receiver.innerHTML = textContent.Receiver;

    const receiverExample: Block = root.appendChild(document.createElement("block-element")) as Block;
    receiverExample.Init();
    receiverExample.SetText(textContent.ReceiverExample);

    const descriptionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    descriptionsSection.innerHTML = "Descriptions";

    const descriptions: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    descriptions.innerHTML = textContent.Descriptions;

    const descriptionExample: Block = root.appendChild(document.createElement("block-element")) as Block;
    descriptionExample.Init();
    descriptionExample.SetText(textContent.DescriptionExample);

    const directionSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    directionSection.innerHTML = "Directions";

    const direction: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    direction.innerHTML = textContent.Directions;

    const directionExample: Block = root.appendChild(document.createElement("block-element")) as Block;
    directionExample.Init();
    directionExample.SetText(textContent.DirectionExample);

    const locationsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    locationsSection.innerHTML = "Locations";

    const locations: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    locations.innerHTML = textContent.Locations;

    const locationExample: Block = root.appendChild(document.createElement("block-element")) as Block;
    locationExample.Init();
    locationExample.SetText(textContent.LocationExample);

    const twineBatchExporterSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    twineBatchExporterSection.innerHTML = "Twine Batch Exporter";

    const twineBatchExporter: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    twineBatchExporter.innerHTML = textContent.TwineBatchExporter;

    return root;
}
