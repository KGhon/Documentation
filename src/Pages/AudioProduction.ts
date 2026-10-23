import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/AudioProduction/pages.json';
import { CodeBlock } from '../Templates/CodeBlock.ts';
import { Table } from '../Templates/Table.ts';
import data from "../../docs/code-snippets.json";

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

const guiToolkit: HTMLDivElement = document.createElement('div');
const text: HTMLLabelElement = document.createElement('label');
text.textContent = "GUI TOOLKIT";
guiToolkit.appendChild(text);

const codeBlock: CodeBlock = document.createElement('div', { is: "code-block" }) as CodeBlock;
codeBlock.Configure(data.GUIToolkit.testCode, false);
guiToolkit.appendChild(codeBlock);

const table: Table = document.createElement('table', { is: 'table-element' }) as Table;
let thing: string[][] = [
    ["function one", "description one"],
    ["function two", "description two"],
    ["function three", "description three"],
    ["function four", "description four"],
    ["function five", "description five"],
]
table.Configure(thing);
guiToolkit.appendChild(table);

spa.AddContentPage("GUI Toolkit", guiToolkit);