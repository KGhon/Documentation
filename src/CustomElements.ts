import { Folder } from "./Templates/Folder.ts";
import { Divider } from "./Templates/Divider.ts";
import { CodeBlock } from "./Templates/CodeBlock.ts";
import { Table } from "./Templates/Table.ts";
import { DocPage } from "./Templates/DocPage.ts";
import { ContentPage } from "./Templates/ContentPage.ts";
import { Header } from "./Templates/Header.ts";
import { NavigationColumn } from "./Templates/NavigationColumn.ts";
import { TableOfContents } from "./Templates/TableOfContents.ts";

customElements.define("folder-element", Folder);
customElements.define("divider-element", Divider);
customElements.define("code-block", CodeBlock);
customElements.define("table-element", Table);
customElements.define("doc-page", DocPage);
customElements.define("content-page", ContentPage);
customElements.define("header-bar", Header);
customElements.define("navigation-column", NavigationColumn);
customElements.define("table-of-contents", TableOfContents);