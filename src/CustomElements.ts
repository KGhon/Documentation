import { Folder } from './Templates/Folder.ts';
import { Divider } from './Templates/Divider.ts';
import { CodeBlock } from './Templates/CodeBlock.ts';
import { DocPage } from './Templates/DocPage.ts';
import { Header } from './Templates/Header.ts';
import { NavigationColumn } from './Templates/NavigationColumn.ts';
import { TableOfContents } from './Templates/TableOfContents.ts';

customElements.define('folder-element', Folder, { extends: 'div' });
customElements.define('divider-element', Divider, { extends: 'div' });
customElements.define('code-block', CodeBlock, { extends: 'div' });
customElements.define('doc-page', DocPage, { extends: 'div' });
customElements.define('header-bar', Header, { extends: 'div' });
customElements.define('navigation-column', NavigationColumn, { extends: 'div' });
customElements.define('table-of-contents', TableOfContents, { extends: 'div' });