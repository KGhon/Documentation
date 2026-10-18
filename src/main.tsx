import './ColorThemes.css';
import './Documentation.css';
import { DocPage } from './Templates/DocPage.ts';

customElements.define('doc-page', DocPage, { extends: 'div' });

const defaultPage: HTMLElement = new DocPage()
document.body.appendChild(defaultPage);