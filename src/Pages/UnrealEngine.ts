import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/UnrealEngine/UnrealEngine-pages.json';
import * as NavigationError from "./NavigationError.ts";
import * as KAudioSystem from "./UnrealEngine/KAudioSystem/KAudioSystem.ts";
import * as AudioSuperComponent from "./UnrealEngine/KAudioSystem/AudioSuperComponent.ts";

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.SetNavigationPageName("Unreal Engine");
spa.PopulateNavigation(pages.pages as [string, string, boolean, boolean][]);
document.body.appendChild(spa);

window.addEventListener('popstate', (event) =>
{
    const pageName = event.state;
    if (pageName)
    {
        spa.ChangePage(pageName, false);
    }
});

window.addEventListener('hashchange', () =>
{
    const path = window.location.hash.replace('#', '');
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
spa.AddContentPage("AudioSuperComponent", AudioSuperComponent.Construct());

const path = window.location.hash.replace('#', '');
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("NavigationError", false);
}