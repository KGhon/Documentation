import './ColorThemes.css';
import './Documentation.css';
import './CustomElements.ts';
import audioProductionPages from "../data/AudioProduction/AudioProduction-pages.json";
import unrealEnginePages from "../data/UnrealEngine/UnrealEngine-pages.json";
import unityPages from "../data/Unity/Unity-pages.json";
import godotPages from "../data/Godot/Godot-pages.json";
import { Header } from "./Templates/Header.ts";
import { NavigationColumn } from"./Templates/NavigationColumn.ts";

function LoadPage(section: string, pageName: string)
{
    window.location.href = pagesPath + section + "/" + `#${pageName}`;
}

document.body.style.backgroundColor = "var(--bg-color)";

const pagesPath = `${import.meta.env.BASE_URL}Pages/`;

const header: Header = document.createElement('div', { is: 'header-bar' }) as Header;
document.body.appendChild(header);

const navigationSections: HTMLDivElement = document.createElement("div");
navigationSections.style.display = "flex";
navigationSections.style.flexDirection = "row";
navigationSections.style.width = "100%";
navigationSections.style.minHeight = "500px";
document.body.appendChild(navigationSections);

const audioProductionNavigation: NavigationColumn = document.createElement("div", { is: "navigation-column" }) as NavigationColumn;
audioProductionNavigation.style.height = "auto";
audioProductionNavigation.style.borderWidth = "2px 1px 2px 2px";
audioProductionNavigation.style.overflow = "hidden";
audioProductionNavigation.SetPageName("Audio Production");
audioProductionNavigation.Populate(audioProductionPages.pages as [string, string, boolean, boolean][], (pageName: string, pushHistory: boolean) => LoadPage("AudioProduction", pageName));
audioProductionNavigation.SetAllFoldersExpand(true);
navigationSections.appendChild(audioProductionNavigation);

const unrealEngineNavigation: NavigationColumn = document.createElement("div", { is: "navigation-column" }) as NavigationColumn;
unrealEngineNavigation.style.height = "auto";
unrealEngineNavigation.style.borderWidth = "2px 1px 2px 1px";
unrealEngineNavigation.style.overflow = "hidden";
unrealEngineNavigation.SetPageName("Unreal Engine");
unrealEngineNavigation.Populate(unrealEnginePages.pages as [string, string, boolean, boolean][], (pageName: string, pushHistory: boolean) => LoadPage("UnrealEngine", pageName));
unrealEngineNavigation.SetAllFoldersExpand(true);
navigationSections.appendChild(unrealEngineNavigation);

const unityNavigation: NavigationColumn = document.createElement("div", { is: "navigation-column" }) as NavigationColumn;
unityNavigation.style.height = "auto";
unityNavigation.style.borderWidth = "2px 1px 2px 1px";
unityNavigation.style.overflow = "hidden";
unityNavigation.SetPageName("Unity");
unityNavigation.Populate(unityPages.pages as [string, string, boolean, boolean][], (pageName: string, pushHistory: boolean) => LoadPage("Unity", pageName));
unityNavigation.SetAllFoldersExpand(true);
navigationSections.appendChild(unityNavigation);

const godotNavigation: NavigationColumn = document.createElement("div", { is: "navigation-column" }) as NavigationColumn;
godotNavigation.style.height = "auto";
godotNavigation.style.borderWidth = "2px 2px 2px 1px";
godotNavigation.style.overflow = "hidden";
godotNavigation.SetPageName("Godot");
godotNavigation.Populate(godotPages.pages as [string, string, boolean, boolean][], (pageName: string, pushHistory: boolean) => LoadPage("Godot", pageName));
godotNavigation.SetAllFoldersExpand(true);
navigationSections.appendChild(godotNavigation);