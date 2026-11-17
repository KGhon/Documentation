import './ColorThemes.css';
import './Documentation.css';
import './CustomElements.ts';
import audioProductionPages from "../data/AudioProduction/AudioProduction-pages.json";
import unrealEnginePages from "../data/UnrealEngine/UnrealEngine-pages.json";
import unityPages from "../data/Unity/Unity-pages.json";
import godotPages from "../data/Godot/Godot-pages.json";
import { Header } from "./Templates/Header.ts";
import { NavigationColumn } from"./Templates/NavigationColumn.ts";

const selectors: HTMLButtonElement[] = [];

function LoadPage(section: string, pageName: string)
{
    window.location.href = pagesPath + section + "/" + `#${pageName}`;
}

function RegisterSelectorButton(displayedText: string, shownSelection: HTMLElement)
{
    const selector: HTMLButtonElement = document.createElement("button");
    selector.textContent = displayedText;
    selector.classList.add("selector-button");
    selector.addEventListener("click", () =>
    {
        selectionDiv.innerHTML = "";
        selectionDiv.appendChild(shownSelection);
        for (const button of selectors)
        {
            button.style.color = "inherit";
        }
        selector.style.color = "#C97CFC";
    });
    selectors.push(selector);
    selectorDiv.appendChild(selector);
}

document.body.style.backgroundColor = "var(--bg-color)";

const pagesPath = `${import.meta.env.BASE_URL}Pages/`;

const audioProductionNavigation: NavigationColumn = document.createElement("navigation-column") as NavigationColumn;
audioProductionNavigation.Init();
audioProductionNavigation.style.borderWidth = "0px";
audioProductionNavigation.SetPageName("Audio Production");
audioProductionNavigation.Populate(audioProductionPages.pages as [string, string, boolean, boolean][], (pageName: string, _: boolean) => LoadPage("AudioProduction", pageName));

const unrealEngineNavigation: NavigationColumn = document.createElement("navigation-column") as NavigationColumn;
unrealEngineNavigation.Init();
unrealEngineNavigation.style.borderWidth = "0px";
unrealEngineNavigation.SetPageName("Unreal Engine");
unrealEngineNavigation.Populate(unrealEnginePages.pages as [string, string, boolean, boolean][], (pageName: string, _: boolean) => LoadPage("UnrealEngine", pageName));

const unityNavigation: NavigationColumn = document.createElement("navigation-column") as NavigationColumn;
unityNavigation.Init();
unityNavigation.style.borderWidth = "0px";
unityNavigation.SetPageName("Unity");
unityNavigation.Populate(unityPages.pages as [string, string, boolean, boolean][], (pageName: string, _: boolean) => LoadPage("Unity", pageName));

const godotNavigation: NavigationColumn = document.createElement("navigation-column") as NavigationColumn;
godotNavigation.Init();
godotNavigation.style.borderWidth = "0px";
godotNavigation.SetPageName("Godot");
godotNavigation.Populate(godotPages.pages as [string, string, boolean, boolean][], (pageName: string, _: boolean) => LoadPage("Godot", pageName));

const header: Header = document.createElement("header-bar") as Header;
header.Init();
document.body.appendChild(header);

const underConstruction: HTMLDivElement = document.createElement("div");
underConstruction.textContent = "This site is currently under construction and migration";
header.AddElement(underConstruction);

const navigationSections: HTMLDivElement = document.createElement("div");
navigationSections.style.display = "flex";
navigationSections.style.flexDirection = "row";
navigationSections.style.width = "100%";
document.body.appendChild(navigationSections);

const selectorDiv: HTMLDivElement = document.createElement("div");
selectorDiv.style.display = "flex";
selectorDiv.style.flexDirection = "column";
selectorDiv.style.minWidth = "15%";
selectorDiv.style.position = "sticky";
selectorDiv.style.top = "var(--header-height)";
selectorDiv.style.height = "calc(100vh - var(--header-height))";
selectorDiv.style.maxHeight = "calc(100vh - var(--header-height))";
selectorDiv.style.overflowY = "auto";
selectorDiv.style.overflowX = "hidden";
selectorDiv.style.boxSizing = "border-box";
selectorDiv.style.borderStyle = "solid";
selectorDiv.style.borderWidth = "0px";
selectorDiv.style.borderRightWidth = "2px";
selectorDiv.style.borderColor = "var(--border-color)";
navigationSections.appendChild(selectorDiv);

const selectionDiv: HTMLDivElement = document.createElement("div");
selectionDiv.style.width = "85%";
navigationSections.appendChild(selectionDiv);

RegisterSelectorButton("Audio Production", audioProductionNavigation);
RegisterSelectorButton("Unreal Engine", unrealEngineNavigation);
RegisterSelectorButton("Unity", unityNavigation);
RegisterSelectorButton("Godot", godotNavigation);
