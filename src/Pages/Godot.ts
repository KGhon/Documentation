import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/Godot/Godot-pages.json';
import * as Boards from "./Godot/KDocumentationTools/Boards/Boards.ts";
import * as Extensions from "./Godot/KDocumentationTools/Extensions/Extensions.ts";
import * as TwineAnalyzer from "./Godot/KDocumentationTools/TwineAnalyzer/TwineAnalyzer.ts";

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.SetNavigationPageName("Godot");
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

window.addEventListener('popstate', (event) =>
{
    console.log(event.state);
    const pageName = event.state;
    if (pageName)
    {
        spa.ChangePage(pageName, false);
    }
    else
    {
        spa.ChangePage("Godot", false);
    }
});

spa.AddContentPage("Godot", document.createElement("div"));
spa.AddContentPage("Boards", Boards.Construct());
spa.AddContentPage("Extensions", Extensions.Construct());
spa.AddContentPage("TwineAnalyzer", TwineAnalyzer.Construct());

const path = window.location.hash.replace('#', '');
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("Godot", false);
}