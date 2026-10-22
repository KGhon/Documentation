import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/AudioProduction/pages.json';
import { CodeBlock } from '../Templates/CodeBlock.ts';
import * as data from "../../data/AudioProduction/GUIToolkit/Code.ts";

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

const guiToolkit: HTMLDivElement = document.createElement('div');
const text: HTMLLabelElement = document.createElement('label');
text.textContent = "GUI TOOLKIT";
guiToolkit.appendChild(text);

const codeBlock: CodeBlock = document.createElement('div', { is: "code-block" }) as CodeBlock;
codeBlock.Configure(data.testCode, "cpp", false);
guiToolkit.appendChild(codeBlock);

spa.AddContentPage("GUI Toolkit", guiToolkit);