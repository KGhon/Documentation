import "../ColorThemes.css";
import "../Documentation.css";
import "../CustomElements.ts";
import { DocPage } from "../Templates/DocPage.ts";
import pages from "../../data/Unity/Unity-pages.json";
import * as NavigationError from "./NavigationError.ts";
import * as FMODWWISEScriptableObjectGenerator from "../Pages/Unity/FMODWWISEScriptableObjectGenerator/FMODWWISEScriptableObjectGenerator.ts"; 

const spa: DocPage = document.createElement("doc-page") as DocPage;
spa.Init();
spa.SetNavigationPageName("Unity");
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
spa.AddContentPage("FMOD-WWISEScriptableObjectGenerator", FMODWWISEScriptableObjectGenerator.Construct());

const path = window.location.hash.replace("#", "");
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("NavigationError", false);
}