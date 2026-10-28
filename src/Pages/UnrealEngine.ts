import '../ColorThemes.css';
import '../Documentation.css';
import '../CustomElements.ts';
import { DocPage } from '../Templates/DocPage.ts';
import pages from '../../data/UnrealEngine/UnrealEngine-pages.json';

const spa: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
spa.SetNavigationPageName("Unreal Engine");
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
        spa.ChangePage("Home", false);
    }
});

spa.AddContentPage("Home", document.createElement("div"));

const path = window.location.hash.replace('#', '');
if (path)
{
    spa.ChangePage(path, false);
}
else
{
    spa.ChangePage("Home", false);
}