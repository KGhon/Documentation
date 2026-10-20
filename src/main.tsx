import './ColorThemes.css';
import './Documentation.css';
import './CustomElements.ts';

const pagesPath = `${import.meta.env.BASE_URL}Pages/`;

const audioProduction: HTMLAnchorElement = document.createElement('a');
audioProduction.href = pagesPath + 'AudioProduction/';
audioProduction.textContent = "Audio Production";
document.body.appendChild(audioProduction);

const unrealEngine: HTMLAnchorElement = document.createElement('a');
unrealEngine.href = pagesPath + "UnrealEngine/";
unrealEngine.textContent = "Unreal Engine";
document.body.appendChild(unrealEngine);

const unity: HTMLAnchorElement = document.createElement('a');
unity.href = pagesPath + "Unity/";
unity.textContent = "Unity";
document.body.appendChild(unity);

const godot: HTMLAnchorElement = document.createElement('a');
godot.href = pagesPath + "Godot/";
godot.textContent = "Godot";
document.body.appendChild(godot);