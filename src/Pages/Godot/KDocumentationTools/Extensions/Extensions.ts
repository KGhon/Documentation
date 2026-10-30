import "../../../../Documentation.css"
import { ContentPage } from "../../../../Templates/ContentPage.ts";
import { CodeBlock } from "../../../../Templates/CodeBlock.ts";
import * as textContent from "../../../../../generated/Extensions-text-generated.json";
import * as code from "../../../../../generated/Extensions-code-generated.json"

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

    const guide: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    guide.innerHTML = textContent.Guide;

    const makingCustomExtensionsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    makingCustomExtensionsSection.innerHTML = 'Making Custom Extensions';

    const makingCustomExtensions: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    makingCustomExtensions.innerHTML = textContent.MakingCustomExtensions;

    const extensionResourceSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    extensionResourceSection.innerHTML = "Extension Resource"

    const extensionResource: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    extensionResource.innerHTML = textContent.ExtensionResource;

    const extensionClassSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    extensionClassSection.innerHTML = "Extension Class"

    const extensionClass: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    extensionClass.innerHTML = textContent.ExtensionClass;

    const extensionSceneSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    extensionSceneSection.innerHTML = "Extension Scene"

    const extensionScene: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    extensionScene.innerHTML = textContent.ExtensionScene;

    const inspectableSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    inspectableSection.innerHTML = "Inspectables"

    const inspectable: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    inspectable.innerHTML = textContent.Inspectables;

    const exampleInspectable: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    exampleInspectable.Configure(code.ExampleInspectable, true, false);

    const inspectableDataSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    inspectableDataSection.innerHTML = "Inspectable Data"

    const inspectableData: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    inspectableData.innerHTML = textContent.InspectableDataClass;

    const inspectorClassSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    inspectorClassSection.innerHTML = "Inspector Class"

    const inspectorClass: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    inspectorClass.innerHTML = textContent.InspectorClass;

    const inspectorSceneSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    inspectorSceneSection.innerHTML = "Inspector Scene"

    const inspectorScene: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    inspectorScene.innerHTML = textContent.InspectorScene;

    const savingDataSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    savingDataSection.innerHTML = "Saving Data"

    const savingData: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    savingData.innerHTML = textContent.SavingData;

    const hookingUpUndoRedoSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    hookingUpUndoRedoSection.innerHTML = "Hooking Up UndoRedo"

    const hookingUpUndoRedo: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    hookingUpUndoRedo.innerHTML = textContent.HookingUpUndoRedo;

    const exampleUndoRedo: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    exampleUndoRedo.Configure(code.ExampleUndoRedo, true, false);

    return root;
}
