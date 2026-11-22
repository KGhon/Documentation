import "../ColorThemes.css";
import "../Documentation.css";
import "../CustomElements.ts";
import { DocPage } from "../Templates/DocPage.ts";
import pages from "../../data/UnrealEngine/UnrealEngine-pages.json";
import * as NavigationError from "./NavigationError.ts";

import * as KAudioMixDesk from "./UnrealEngine/KAudioMixDesk/KAudioMixDesk.ts";
import * as MixConsole from "./UnrealEngine/KAudioMixDesk/MixConsole.ts";
import * as SoundBoard from "./UnrealEngine/KAudioMixDesk/SoundBoard.ts";

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
import * as MusicLayout from "./UnrealEngine/KAudioSystem/MusicLayout.ts";
import * as MusicManager from "./UnrealEngine/KAudioSystem/MusicManager.ts";
import * as MusicSegment from "./UnrealEngine/KAudioSystem/MusicSegment.ts";

import * as MusicClassification from "./UnrealEngine/KAudioSystem/MusicClassification.ts";
import * as MusicTransition from "./UnrealEngine/KAudioSystem/MusicTransitionInstruction.ts";
import * as MusicTransitionOverride from "./UnrealEngine/KAudioSystem/MusicTransitionOverride.ts";
import * as SoundInstanceLimitRule from "./UnrealEngine/KAudioSystem/SoundInstanceLimitRule.ts";
import * as SoundLimitResponse from "./UnrealEngine/KAudioSystem/SoundLimitResponse.ts";
import * as SoundStealRule from "./UnrealEngine/KAudioSystem/SoundStealRule.ts";
import * as MusicTransitionCue from "./UnrealEngine/KAudioSystem/MusicTransitionCue.ts";
import * as MusicOutgoingStopBehavior from "./UnrealEngine/KAudioSystem/MusicOutgoingStopBehavior.ts";
import * as AudioEventCommandScope from "./UnrealEngine/KAudioSystem/AudioEventCommandScope.ts";
import * as AudioStopBehavior from "./UnrealEngine/KAudioSystem/AudioStopBehavior.ts";

import * as KDebugTools from "./UnrealEngine/KDebugTools/KDebugTools.ts";
import * as KBlueprintConsoleCommands from "./UnrealEngine/KDebugTools/KBlueprintConsoleCommands.ts";
import * as KDebugDocker from "./UnrealEngine/KDebugTools/KDebugDocker.ts";
import * as KDebugManagerSubsystem from "./UnrealEngine/KDebugTools/KDebugManagerSubsystem.ts";
import * as KDebugToolsStatics from "./UnrealEngine/KDebugTools/KDebugToolsStatics.ts";
import * as KDebugWidget from "./UnrealEngine/KDebugTools/KDebugWidget.ts";
import * as KEditorUtilityWidget from "./UnrealEngine/KDebugTools/KEditorUtilityWidget.ts";
/*
import * as KDialogueSystem from "./UnrealEngine/KDialogueSystem/KDialogueSystem.ts";
import * as DialogueBranch from "./UnrealEngine/KDialogueSystem/DialogueBranch.ts";
import * as DialogueManagerSubsystem from "./UnrealEngine/KDialogueSystem/DialogueManagerSubsystem.ts";
import * as DialoguePath from "./UnrealEngine/KDialogueSystem/DialoguePath.ts";
import * as DialogueStep from "./UnrealEngine/KDialogueSystem/DialogueStep.ts";
import * as DialogueTree from "./UnrealEngine/KDialogueSystem/DialogueTree.ts";

import * as DialogueChoice from "./UnrealEngine/KDialogueSystem/DialogueChoice.ts";
import * as DialogueInstruction from "./UnrealEngine/KDialougeSystem/DialogueInstruction.ts";

import * as DialogueResponse from "./UnrealEngine/KDialogueSystem/DialogueResponse.ts";
*/

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

spa.AddContentPage("KAudioMixDesk", KAudioMixDesk.Construct());
spa.AddContentPage("MixConsole", MixConsole.Construct());
spa.AddContentPage("SoundBoard", SoundBoard.Construct());

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
spa.AddContentPage("MusicLayout", MusicLayout.Construct());
spa.AddContentPage("MusicManager", MusicManager.Construct());
spa.AddContentPage("MusicSegment", MusicSegment.Construct());

spa.AddContentPage("MusicClassification", MusicClassification.Construct());
spa.AddContentPage("MusicTransitionInstruction", MusicTransition.Construct());
spa.AddContentPage("MusicTransitionOverride", MusicTransitionOverride.Construct());

spa.AddContentPage("SoundInstanceLimitRule", SoundInstanceLimitRule.Construct());
spa.AddContentPage("SoundLimitResponse", SoundLimitResponse.Construct());
spa.AddContentPage("SoundStealRule", SoundStealRule.Construct());
spa.AddContentPage("MusicTransitionCue", MusicTransitionCue.Construct());
spa.AddContentPage("MusicOutgoingStopBehavior", MusicOutgoingStopBehavior.Construct());
spa.AddContentPage("AudioEventCommandScope", AudioEventCommandScope.Construct());
spa.AddContentPage("AudioStopBehavior", AudioStopBehavior.Construct());

spa.AddContentPage("KDebugTools", KDebugTools.Construct());
spa.AddContentPage("KBlueprintConsoleCommands", KBlueprintConsoleCommands.Construct());
spa.AddContentPage("KDebugDocker", KDebugDocker.Construct());
spa.AddContentPage("KDebugManagerSubsystem", KDebugManagerSubsystem.Construct());
spa.AddContentPage("KDebugToolsStatics", KDebugToolsStatics.Construct());
spa.AddContentPage("KDebugWidget", KDebugWidget.Construct());
spa.AddContentPage("KEditorUtilityWidget", KEditorUtilityWidget.Construct());
/*
spa.AddContentPage("KDialogueSystem", KDialogueSystem.Construct());
spa.AddContentPage("DialogueBranch", DialogueBranch.Construct());
spa.AddContentPage("DialogueChoice", DialogueChoice.Construct());
spa.AddContentPage("DialoguePath", DialoguePath.Construct());
spa.AddContentPage("DialogueStep", DialogueStep.Construct());
spa.AddContentPage("DialogueTree", DialogueTree.Construct());

spa.AddContentPage("DialogueInstruction", DialogueInstruction.Construct());
spa.AddContentPage("DialogueManagerSubsystem", DialogueManagerSubsystem.Construct());

spa.AddContentPage("DialogueResponse", DialogueResponse.Construct());
*/
const path = window.location.hash.replace("#", "");
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("NavigationError", false);
}