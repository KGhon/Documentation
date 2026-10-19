import './ColorThemes.css';
import './Documentation.css';
import { Folder } from './Templates/Folder.ts'
import { DocPage } from './Templates/DocPage.ts';
import { TableOfContents } from './Globals/TableOfContents.ts';

customElements.define('element-folder', Folder, { extends: 'div' });
customElements.define('doc-page', DocPage, { extends: 'div' });
customElements.define('table-of-contents', TableOfContents, { extends: 'div' });

const tableOfContents: TableOfContents = new TableOfContents();
document.body.appendChild(tableOfContents);

//const defaultPage: HTMLElement = new DocPage()
//document.body.appendChild(defaultPage);