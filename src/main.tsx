import './ColorThemes.css';
import './Documentation.css';
import "./main.css";
import './CustomElements.ts';
import audioProductionPages from "../data/AudioProduction/AudioProduction-pages.json";
import unrealEnginePages from "../data/UnrealEngine/UnrealEngine-pages.json";
import unityPages from "../data/Unity/Unity-pages.json";
import godotPages from "../data/Godot/Godot-pages.json";
import { Header, HeaderSection } from "./Templates/Header.ts";
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
    selector.classList.add("highlightable");
    selector.addEventListener("click", () =>
    {
        selectionDiv.innerHTML = "";
        selectionDiv.appendChild(shownSelection);
        selectorDiv.classList.remove("open");
        for (const button of selectors)
        {
            button.style.color = "inherit";
        }
        selector.style.color = "#C97CFC";
        drawerButton.classList.remove("open");
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

const drawerButton: HTMLButtonElement = document.createElement("button");
drawerButton.textContent = "Nav";
drawerButton.classList.add("main__drawer-button");
drawerButton.classList.add("header-button");
drawerButton.addEventListener("click", () =>
{
    if (selectorDiv.classList.contains("open"))
    {
        selectorDiv.classList.remove("open");
        drawerButton.classList.remove("open");
    }
    else
    {
        selectorDiv.classList.add("open");
        drawerButton.classList.add("open");
    }
});
header.AddElement(HeaderSection.Left, drawerButton);

const underConstruction: HTMLDivElement = document.createElement("div");
underConstruction.textContent = "This site is currently under construction and migration";
header.AddElement(HeaderSection.Center, underConstruction);

const navigationSections: HTMLDivElement = document.createElement("div");
navigationSections.classList.add("main__navigation-sections");
document.body.appendChild(navigationSections);

const selectorDiv: HTMLDivElement = document.createElement("div");
selectorDiv.classList.add("main__drawer-left");
navigationSections.appendChild(selectorDiv);

const selectionDiv: HTMLDivElement = document.createElement("div");
selectionDiv.classList.add("main__selection-div");
navigationSections.appendChild(selectionDiv);

RegisterSelectorButton("Audio Production", audioProductionNavigation);
RegisterSelectorButton("Unreal Engine", unrealEngineNavigation);
RegisterSelectorButton("Unity", unityNavigation);
RegisterSelectorButton("Godot", godotNavigation);

if (window.matchMedia("(max-width: 768px)").matches)
{
    selectorDiv.classList.add("open");
    drawerButton.classList.add("open");
}

const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', (evt: MediaQueryListEvent) =>
{
    if (evt.matches)
    {
        selectorDiv.classList.remove("open");
        drawerButton.classList.remove("open");
    }
});