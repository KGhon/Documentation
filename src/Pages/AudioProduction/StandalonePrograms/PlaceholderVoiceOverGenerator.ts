import "../../../Documentation.css"
import * as textContent from "../../../../data/AudioProduction/PlaceholderVoiceoverGenerator-text-generated.json";

const root: HTMLDivElement = document.createElement("div");
export function Construct(): HTMLDivElement
{
    const title: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c0" })) as HTMLParagraphElement;
    title.innerHTML = textContent.Title;

    root.appendChild(document.createElement('div', { is: 'divider-element' }));

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = 'Overview';

    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML = textContent.Overview;

    const dependenciesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    dependenciesSection.innerHTML = 'Dependencies';

    const dependencies: HTMLUListElement = root.appendChild(Object.assign(document.createElement("ul"), { className: "c4", style: "white-space: normal" })) as HTMLUListElement;
    dependencies.innerHTML = textContent.Dependencies;

    const howItWorksSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    howItWorksSection.innerHTML = 'How It Works';

    const howItWorks: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    howItWorks.innerHTML = textContent.HowItWorks;

    return root;
}
