import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/AudioProduction/pages.json';
import * as GUIToolkit from "./AudioProduction/ReaperScripts/GUIToolkit.ts";
import * as MIDIMixingTool from "./AudioProduction/ReaperScripts/MIDIMixingTool.ts";
import * as ProjectSetupHelpers from "./AudioProduction/ReaperScripts/ProjectSetupHelpers.ts";
import * as MIDIRetriggerableBuffer from "./AudioProduction/Plugins/MIDIRetriggerableBuffer.ts";
import * as PlaceholderVoiceOverGenerator from "./AudioProduction/StandalonePrograms/PlaceholderVoiceOverGenerator.ts";

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.SetNavigationPageName("Audio Production");
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

spa.AddContentPage("GUI Toolkit", GUIToolkit.Construct());
spa.AddContentPage("MIDI Mixing Tool", MIDIMixingTool.Construct());
spa.AddContentPage("Project Setup Helpers", ProjectSetupHelpers.Construct());
spa.AddContentPage("MIDI Retriggerable Buffer", MIDIRetriggerableBuffer.Construct());
spa.AddContentPage("Placeholder Voice Over Generator", PlaceholderVoiceOverGenerator.Construct());