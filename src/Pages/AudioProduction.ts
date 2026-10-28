import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/AudioProduction/AudioProduction-pages.json';
import * as GUIToolkit from "./AudioProduction/ReaperScripts/GUIToolkit.ts";
import * as MIDIMixingTool from "./AudioProduction/ReaperScripts/MIDIMixingTool.ts";
import * as ProjectSetupHelpers from "./AudioProduction/ReaperScripts/ProjectSetupHelpers.ts";
import * as MIDIRetriggerableBuffer from "./AudioProduction/Plugins/MIDIRetriggerableBuffer.ts";
import * as PlaceholderVoiceoverGenerator from "./AudioProduction/StandalonePrograms/PlaceholderVoiceoverGenerator.ts";

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.SetNavigationPageName("Audio Production");
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
        spa.ChangePage("AudioProduction", false);
    }
});

spa.AddContentPage("AudioProduction", document.createElement("div"));
spa.AddContentPage("GUIToolkit", GUIToolkit.Construct());
spa.AddContentPage("MIDIMixingTool", MIDIMixingTool.Construct());
spa.AddContentPage("ProjectSetupHelpers", ProjectSetupHelpers.Construct());
spa.AddContentPage("MIDIRetriggerableBuffer", MIDIRetriggerableBuffer.Construct());
spa.AddContentPage("PlaceholderVoiceoverGenerator", PlaceholderVoiceoverGenerator.Construct());

const path = window.location.hash.replace('#', '');
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("AudioProduction", false);
}