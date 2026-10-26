import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/AudioProduction/pages.json';
import * as GUIToolkit from "./AudioProduction/GUIToolkit.ts";

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.SetNavigationPageName("Audio Production");
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

spa.AddContentPage("GUI Toolkit", GUIToolkit.Construct());