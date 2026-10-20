import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/AudioProduction/pages.json';

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

const guiToolkit: HTMLDivElement = document.createElement('div');
const text: HTMLLabelElement = document.createElement('label');
text.textContent = "GUI TOOLKIT";
guiToolkit.appendChild(text);
spa.AddContentPage("GUI Toolkit", guiToolkit);