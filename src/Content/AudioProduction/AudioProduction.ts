import '../../ColorThemes.css';
import '../../Documentation.css';
import { DocPage } from '../../Templates/DocPage.ts';

const docPage: DocPage = document.createElement('div', { is: 'doc-page' }) as DocPage;
document.body.appendChild(docPage);