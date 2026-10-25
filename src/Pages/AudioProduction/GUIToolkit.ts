import "../../Documentation.css"
import { CodeBlock } from "../../Templates/CodeBlock.ts";
import { Table } from "../../Templates/Table.ts";
import * as code from "../../../data/AudioProduction/GUIToolkit.json";

const root: HTMLDivElement = document.createElement("div");
export function Construct(): HTMLDivElement
{
    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = 'Overview';

    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML =
`This GUI Toolkit provides classes to create simple GUIs for ReaScripts using native gfx code in Lua. UIs are built by constructing parent-child trees using the toolkit classes.`;

    const dependenciesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    dependenciesSection.innerHTML = 'Dependencies';

    const dependencies: HTMLUListElement = root.appendChild(Object.assign(document.createElement("ul"), { className: "c4", style: "white-space: normal" })) as HTMLUListElement;
    dependencies.innerHTML =
`   <li>Reaper v7.76+</li>
    <li>The GUIToolkit_Kevin.lua file must be in the same location as any Reascript that wants to use it.</li>`;

    const exampleSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    exampleSection.innerHTML = 'Example';

    const example: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    example.innerHTML =
`Below is a simple example of a GUI that positions two button that when pressed change some text.

NOTE: Using gfx.w or gfx.h for the width and height parameters of a UI element constructor means the UI element will expand to fit the entire window or constraints of the parent element, if any. If given literal values, the element will size to the minimum of either the given values or the constraints of the parent.`;

    const exampleCode: CodeBlock = root.appendChild(document.createElement("div", { is: "code-block" })) as CodeBlock;
    exampleCode.Configure(code.Example, true, true, "Example.lua");

    const classesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    classesSection.innerHTML = 'Classes';

    const guiContextSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    guiContextSection.innerHTML = 'GUIContext';

    const guiContext: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    guiContext.innerHTML =
'The GUIContext is the first class that should be instantiated. It manages the root of the UI tree, an input handler, and is responsible for constantly updating the UI through the tree.';

    const guiContextFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    guiContextFunctions.Configure(code.GUIContextFunctions);

    const uiBaseSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    uiBaseSection.innerHTML = 'UIBase';

    const uiBase: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    uiBase.innerHTML =
'The base class upon which all other UI elements are built. Instantiating this class creates a UI element that allows child elements to control their own xy-position. These functions can be used on any UI element.';

    const uiBaseFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    uiBaseFunctions.Configure(code.UIBaseFunctions);

    return root;
}
