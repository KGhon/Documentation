import './ColorThemes.css';
import './Documentation.css';
import { Folder } from './Templates/Folder.ts'
import { DocPage } from './Templates/DocPage.ts';
import { NavigationColumn } from './Templates/NavigationColumn.ts';
import { TableOfContents } from './Templates/TableOfContents.ts';

customElements.define('element-folder', Folder, { extends: 'div' });
customElements.define('doc-page', DocPage, { extends: 'div' });
customElements.define('navigation-column', NavigationColumn, { extends: 'div' });
customElements.define('table-of-contents', TableOfContents, { extends: 'div' });

const docPage: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
document.body.appendChild(docPage);

const navigationColumn: NavigationColumn = new NavigationColumn();
docPage.navigation.appendChild(navigationColumn);

const test: HTMLParagraphElement = document.createElement('p');
test.textContent = "A TOP LEVEL";
test.classList.add('c1');
docPage.content.appendChild(test);

const test1: HTMLParagraphElement = document.createElement('p');
test1.textContent = "NEST 1";
test1.classList.add('c2');
docPage.content.appendChild(test1);

const test2: HTMLParagraphElement = document.createElement('p');
test2.textContent = "NEST 2";
test2.classList.add('c3');
docPage.content.appendChild(test2);

const test3: HTMLParagraphElement = document.createElement('p');
test3.textContent = "THE NEXT ONE";
test3.classList.add('c2');
docPage.content.appendChild(test3);

const test4: HTMLParagraphElement = document.createElement('p');
test4.textContent = "INSIDE";
test4.style.minHeight = "1000px";
test4.classList.add('c3');
docPage.content.appendChild(test4);

const test5: HTMLParagraphElement = document.createElement('p');
test5.textContent = "NEW";
test5.classList.add('c1');
docPage.content.appendChild(test5);

const tableOfContents: HTMLElement = document.createElement('div', { is: 'table-of-contents' });
docPage.tableOfContents.appendChild(tableOfContents);