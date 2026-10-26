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
`<li>Reaper v7.76+</li>
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
`The GUIContext is the first class that should be instantiated. It manages the root of the UI tree, an input handler, and is responsible for constantly updating the UI through the tree.`;

    const guiContextPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    guiContextPublic.innerHTML = "Public Functions";

    const guiContextPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    guiContextPublicFunctions.Configure(code.GUIContextPublicFunctions);

    const uiBaseSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    uiBaseSection.innerHTML = 'UIBase';

    const uiBase: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    uiBase.innerHTML =
`The base class upon which all other UI elements are built. Instantiating this class creates a UI element that allows child elements to control their own xy-position. These functions can be used on any UI element.`;

    const uiBasePublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    uiBasePublic.innerHTML = "Public Functions";

    const uiBasePublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    uiBasePublicFunctions.Configure(code.UIBasePublicFunctions);

    const dividerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    dividerSection.innerHTML = 'Divider';

    const divider: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    divider.innerHTML =
`A simple UI element that draws a centered box.`;

    const dividerPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    dividerPublic.innerHTML = "Public Functions";

    const dividerPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    dividerPublicFunctions.Configure(code.DividerPublicFunctions);

    const horizontalContainerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    horizontalContainerSection.innerHTML = 'HorizontalContainer';

    const horizontalContainer: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    horizontalContainer.innerHTML =
`This UI element distributes immediate child elements horizontally within the container's runtime width. This container takes into consideration child element ratio values.`;

    const horizontalContainerPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    horizontalContainerPublic.innerHTML = "Public Functions";

    const horizontalContainerPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    horizontalContainerPublicFunctions.Configure(code.HorizontalContainerPublicFunctions);

    const verticalContainerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    verticalContainerSection.innerHTML = 'VerticalContainer';

    const verticalContainer: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    verticalContainer.innerHTML =
`This UI element distributes immediate child elements vertically within the container's runtime height.This container takes into consideration child element ratio values.`;

    const verticalContainerPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    verticalContainerPublic.innerHTML = "Public Functions";

    const verticalContainerPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    verticalContainerPublicFunctions.Configure(code.VerticalContainerPublicFunctions);

    const scaleContainerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    scaleContainerSection.innerHTML = 'ScaleContainer';

    const scaleContainer: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    scaleContainer.innerHTML =
`This UI element will scale immediate child elements to fit the runtime size of the container. It is meant to only hold one immediate child element.`;

    const scaleContainerPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    scaleContainerPublic.innerHTML = "Public Functions";

    const scaleContainerPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    scaleContainerPublicFunctions.Configure(code.ScaleContainerPublicFunctions);

    const scrollContainerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    scrollContainerSection.innerHTML = 'ScrollContainer';

    const scrollContainer: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    scrollContainer.innerHTML =
`This UI element will distribute immediate child elements vertically using their runtime height. If the combined height of the UI elments is larger than the viewable area of the container, the container can be scrolled.`;

    const scrollContainerPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    scrollContainerPublic.innerHTML = "Public Functions";

    const scrollContainerPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    scrollContainerPublicFunctions.Configure(code.ScrollContainerPublicFunctions);

    const tabContainerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    tabContainerSection.innerHTML = 'TabContainer';

    const tabContainer: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    tabContainer.innerHTML =
`This UI element will distribute immediate child elements vertically using their runtime height. If the combined height of the UI elments is larger than the viewable area of the container, the container can be scrolled.`;

    const tabContainerPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    tabContainerPublic.innerHTML = "Public Functions";

    const tabContainerPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    tabContainerPublicFunctions.Configure(code.TabContainerPublicFunctions);

    const textSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    textSection.innerHTML = 'Text';

    const text: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    text.innerHTML =
`This UI element only displays text.`;

    const textPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    textPublic.innerHTML = "Public Functions";

    const textPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    textPublicFunctions.Configure(code.TextPublicFunctions);

    const buttonSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    buttonSection.innerHTML = 'Button';

    const button: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    button.innerHTML =
`This UI element can either be a click or toggle button.`;

    const buttonPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    buttonPublic.innerHTML = "Public Functions";

    const buttonPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    buttonPublicFunctions.Configure(code.ButtonPublicFunctions);

    const textInputSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    textInputSection.innerHTML = 'TextInput';

    const textInput: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    textInput.innerHTML =
`This UI element holds a modifiable text value.`;

    const textInputPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    textInputPublic.innerHTML = "Public Functions";

    const textInputPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    textInputPublicFunctions.Configure(code.TextInputPublicFunctions);

    const numericInputSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    numericInputSection.innerHTML = 'NumericInput';

    const numericInput: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    numericInput.innerHTML =
`This UI element holds a modifiable numeric value.`;

    const numericInputPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    numericInputPublic.innerHTML = "Public Functions";

    const numericInputPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    numericInputPublicFunctions.Configure(code.NumericInputPublicFunctions);

    const dropdownSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    dropdownSection.innerHTML = 'Dropdown';

    const dropdown: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    dropdown.innerHTML =
`This UI element creates a dropdown list of named options.`;

    const dropdownPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    dropdownPublic.innerHTML = "Public Functions";

    const dropdownPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    dropdownPublicFunctions.Configure(code.DropdownPublicFunctions);

    const listSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    listSection.innerHTML = 'List';

    const list: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    list.innerHTML =
`This UI element creates a scrollable list of named items. It supports single selection and multiselection.`;

    const listPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    listPublic.innerHTML = "Public Functions";

    const listPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    listPublicFunctions.Configure(code.ListPublicFunctions);

    const folerSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    folerSection.innerHTML = 'Folder';

    const folder: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    folder.innerHTML =
`This UI element can toggle showing and hiding its immedite child elements.`;

    const folderPublic: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c3" })) as HTMLParagraphElement;
    folderPublic.innerHTML = "Public Functions";

    const folderPublicFunctions: Table = root.appendChild(document.createElement("table", { is: "table-element" })) as Table;
    folderPublicFunctions.Configure(code.FolderPublicFunctions);

    return root;
}
