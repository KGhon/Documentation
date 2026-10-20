import { Header } from './Header.ts';

export class BasePage extends HTMLDivElement
{
    public header: Header;
    public constructor()
    {
        super();

        this.style.margin = "0";
        this.style.padding = "0";
        this.style.display = "flex";
        this.style.flexGrow = "1";
        this.style.flexDirection = "column";
        this.style.backgroundColor = "var(--bg-color)";

        this.header = document.createElement('div', { is: 'header-bar' }) as Header;
        this.appendChild(this.header);
    }

    public connectedCallback()
    {

    }
}