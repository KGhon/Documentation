import "../../../Documentation.css"
import { Table } from "../../../Templates/Table.ts";
import * as content from "../../../../data/AudioProduction/MIDIMixingTool.json";

const root: HTMLDivElement = document.createElement("div");
export function Construct(): HTMLDivElement
{
    const title: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c0" })) as HTMLParagraphElement;
    title.innerHTML = 'MIDI Mixing Tool';

    root.appendChild(document.createElement('div', { is: 'divider-element' }));

    const overviewSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    overviewSection.innerHTML = 'Overview';

    const overview: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    overview.innerHTML =
`This tool is used to set up and manage a Reaper project for the purpose of streamlining the importing, mixing, and exporting of large amounts of sound files. It is primarily used for clean up, pre-mixing before implementation, or when implementation does not provide adequate tooling for mixing and the mix needs to be baked into the sound files themselves.`;

    const dependenciesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    dependenciesSection.innerHTML = 'Dependencies';

    const dependencies: HTMLUListElement = root.appendChild(Object.assign(document.createElement("ul"), { className: "c4", style: "white-space: normal" })) as HTMLUListElement;
    dependencies.innerHTML =
`<li>Reaper v7.76+</li>
<li>The GUIToolkit_Kevin.lua file must be in the same location as any Reascript that wants to use it.</li>`;

    const howItWorksSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    howItWorksSection.innerHTML = 'How It Works';

    const howItWorks: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    howItWorks.innerHTML =
`The MIDIMixingTool is built to allow you to mix any number of sound files by triggering them using a MIDI keyboard. This removes the need to manually import, reposition, and sequence sound files in the project. By triggering everything using MIDI, you can easily simulate the soundscape of gameplay.

Each sound file is given its own track. You can add whatever processing you want per track and therefore per sound file. Note that you can also manually folderize tracks to organize them, BUT the tool only supports one level of folderization for its helper functions. If you want to process multiple tracks with the same processing, use routing to busses instead of folders.`;

    const setupSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    setupSection.innerHTML = 'Setup';

    const setup: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    setup.innerHTML =
`The Setup section allows you to import any number of sound files. Each imported sound file will be assigned to a it's own track with a sampler and a MIDI note for triggering. MIDI is assigned chromatically ascending. The sound file is also added to the track muted for use when exporting later. Do not move these auto-placed media items.`;

    const setupTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    setupTable.Configure(content.Setup);

    const helpersSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    helpersSection.innerHTML = 'Helpers';

    const helpers: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    helpers.innerHTML =
`Helpers for batch modifying settings.`;

    const helpersTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    helpersTable.Configure(content.Helpers);

    const midiGenerationSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    midiGenerationSection.innerHTML = 'MIDI Generation';

    const midiGeneration: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    midiGeneration.innerHTML =
`The MIDI Generation section provides programatic ways of generating MIDI for testing or sharing the current progress of your mix. It also provides an easy way to create a Global MIDI Bus that will broadcast MIDI on one track to all other tracks.

To generate MIDI, create an empty MIDI item first and then select it. Depending on your generation settings, the length of the MIDI item may be considered in the generation (ie. Timing = Random).`;

    const midiGenerationTable: Table = root.appendChild(Object.assign(document.createElement("table", { is: "table-element" }), { className: "c4" })) as Table;
    midiGenerationTable.Configure(content.MIDIGeneration);

    const exportStrategiesSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c1" })) as HTMLParagraphElement;
    exportStrategiesSection.innerHTML = 'Export Strategies';

    const exportWithTailsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    exportWithTailsSection.innerHTML = 'Export With Tails';

    const exporWithTails: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    exporWithTails.innerHTML =
`If the files you want to export are not processed in any way that produces tails (ie. reverb), then you can export the files with your mix applied using these settings:

1. Select all media items you wish to export and make sure they are unmuted.

2. In the Render settings:<ul>
    <li>Source = Selected media items / Via master</li>
    <li>File name = $item</li>
    <li>Tracks with only mono media to mono files = TRUE (if you don't have processing meant to make mono files stereo, this option lets you keep the Channels setting to stereo and still be able to export mono files in one pass)</li></ul>
3. Render (export)`;

    const exportWithoutTailsSection: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c2" })) as HTMLParagraphElement;
    exportWithoutTailsSection.innerHTML = 'Export Without Tails';

    const exportWithoutTails: HTMLParagraphElement = root.appendChild(Object.assign(document.createElement("p"), { className: "c4" })) as HTMLParagraphElement;
    exportWithoutTails.innerHTML =
`If the files you want to export are being processed in a way that produces tails (ie. reverb), then you can export the files with your mix and automatic tail detection using these settings:

1. Unmute all media items for the tracks you want to export (these were automatically added to the tracks by the MIDIMixingTool when importing)

2. Select all tracks you wish to export (if you don't want the MIDI notes in the exported file names, use the MIDIMixingTool Export helper to toggle them off).

3. In the Render settings:<ul>
    <li>Source = Selected tracks (stems) / Via master / Time Selection</li>
    <li>File name = $track</li>
    <li>Tracks with only mono media to mono files = TRUE (if you don't have processing meant to make mono files stereo, this option lets you keep the Channels setting to stereo and still be able to export mono files in one pass)</li>
    <li>Postprocess... = TRUE (it's on the right side of Resample mode and may be named differently if you have items already selected in it)</li>
    <li>Inside Postprocess, Trim trailing silence threshold (peak) = TRUE (set the dB value to how quiet you want Reaper to detect for trimming the file)</li>
    <li>Inside Postprocess, Fade-out = TRUE (set a small value just to make sure the trim will have a guaranteed fade to silence)</li>
    <li>Inside Postprocess below Fade-out set Fade-out is inside trimmed content</li></ul>
4. Next, highlight the time selection that encompasses the beginning of the project (where all the media items should be automatically aligned since importing) to where you estimate the longest tail of all your selected sounds will have dissipated. To help decrease the render time, we set the render settings to Time Selection because Reaper is going to render that span of time for each file and then use our trim settings to trim that render to where the audio signal falls below the trimming threshold.

5. Render (export)`;

    return root;
}
