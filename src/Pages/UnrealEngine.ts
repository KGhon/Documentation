import "../ColorThemes.css";
import "../Documentation.css";
import "../CustomElements.ts";
import { DocPage } from "../Templates/DocPage.ts";
import pages from "../../data/UnrealEngine/UnrealEngine-pages.json";
import * as NavigationError from "./NavigationError.ts";
import * as KAudioSystem from "./UnrealEngine/KAudioSystem/KAudioSystem.ts";
import * as AudioAgent from "./UnrealEngine/KAudioSystem/AudioAgent.ts";
import * as AudioEnvironment from "./UnrealEngine/KAudioSystem/AudioEnvironment.ts";
import * as AudioEvent from "./UnrealEngine/KAudioSystem/AudioEvent.ts";
import * as AudioEventCommand from "./UnrealEngine/KAudioSystem/AudioEventCommand.ts";
import * as AudioFloatParameter from "./UnrealEngine/KAudioSystem/AudioFloatParameter.ts";
import * as AudioGroupParameter from "./UnrealEngine/KAudioSystem/AudioGroupParameter.ts";
import * as AudioListener from "./UnrealEngine/KAudioSystem/AudioListener.ts";
import * as AudioSuperComponent from "./UnrealEngine/KAudioSystem/AudioSuperComponent.ts";
import * as AudioSwitchParameter from "./UnrealEngine/KAudioSystem/AudioSwitchParameter.ts";
import * as KAudioSystemStatics from "./UnrealEngine/KAudioSystem/KAudioSystemStatics.ts";
import * as MusicClassification from "./UnrealEngine/KAudioSystem/MusicClassification.ts";
import * as MusicLayout from "./UnrealEngine/KAudioSystem/MusicLayout.ts";
import * as MusicManager from "./UnrealEngine/KAudioSystem/MusicManager.ts";
import * as MusicSegment from "./UnrealEngine/KAudioSystem/MusicSegment.ts";
import * as MusicTransition from "./UnrealEngine/KAudioSystem/MusicTransitionInstruction.ts";
import * as MusicTransitionOverride from "./UnrealEngine/KAudioSystem/MusicTransitionOverride.ts";

const spa: DocPage = document.createElement("doc-page") as DocPage;
spa.Init();
spa.SetNavigationPageName("Unreal Engine");
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
spa.AddContentPage("KAudioSystem", KAudioSystem.Construct());
spa.AddContentPage("AudioAgent", AudioAgent.Construct());
spa.AddContentPage("AudioEnvironment", AudioEnvironment.Construct());
spa.AddContentPage("AudioEvent", AudioEvent.Construct());
spa.AddContentPage("AudioEventCommand", AudioEventCommand.Construct());
spa.AddContentPage("AudioFloatParameter", AudioFloatParameter.Construct());
spa.AddContentPage("AudioGroupParameter", AudioGroupParameter.Construct());
spa.AddContentPage("AudioListener", AudioListener.Construct());
spa.AddContentPage("AudioSuperComponent", AudioSuperComponent.Construct());
spa.AddContentPage("AudioSwitchParameter", AudioSwitchParameter.Construct());
spa.AddContentPage("KAudioSystemStatics", KAudioSystemStatics.Construct());
spa.AddContentPage("MusicClassification", MusicClassification.Construct());
spa.AddContentPage("MusicLayout", MusicLayout.Construct());
spa.AddContentPage("MusicManager", MusicManager.Construct());
spa.AddContentPage("MusicSegment", MusicSegment.Construct());
spa.AddContentPage("MusicTransitionInstruction", MusicTransition.Construct());
spa.AddContentPage("MusicTransitionOverride", MusicTransitionOverride.Construct());

const path = window.location.hash.replace("#", "");
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("NavigationError", false);
}