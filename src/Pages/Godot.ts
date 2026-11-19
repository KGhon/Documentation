import "../ColorThemes.css";
import "../Documentation.css";
import "../CustomElements.ts";
import { DocPage } from "../Templates/DocPage.ts";
import pages from "../../data/Godot/Godot-pages.json";
import * as NavigationError from "./NavigationError.ts";
import * as Boards from "./Godot/KDocumentationTools/Boards/Boards.ts";
import * as Extensions from "./Godot/KDocumentationTools/Extensions/Extensions.ts";
import * as TwineAnalyzer from "./Godot/KDocumentationTools/TwineAnalyzer/TwineAnalyzer.ts";

const spa: DocPage = document.createElement("doc-page") as DocPage;
spa.Init();
spa.SetNavigationPageName("Godot");
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

window.addEventListener("popstate", (event) =>
{
    const pageName = event.state;
    if (pageName)
    {
        spa.ChangePage(pageName, false);
    }
});

window.addEventListener("hashchange", () =>
{
    const path = window.location.hash.replace("#", "");
    if (path)
    {
        spa.ChangePage(path, false);
    }
    else
    {
        spa.ChangePage("NavigationError", false);
    }
});

spa.AddContentPage("NavigationError", NavigationError.Construct());
spa.AddContentPage("Boards", Boards.Construct());
spa.AddContentPage("Extensions", Extensions.Construct());
spa.AddContentPage("TwineAnalyzer", TwineAnalyzer.Construct());

const path = window.location.hash.replace("#", "");
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("NavigationError", false);
}