import "../Documentation.css";
import "./CodeBlock.css";

export class CodeBlock extends HTMLElement
{
    private root!: HTMLDivElement;
    private code!: HTMLDivElement;

    public Init()
    {
        this.root = document.createElement("div");
        this.root.classList.add("code-block__root");
        this.appendChild(this.root);

        this.code = document.createElement("div");
        this.code.classList.add("code-block__code");
        this.root.appendChild(this.code);
    }

    public async Configure(code: string, canCopy: boolean, isCompact: boolean, name: string = "")
    {
        this.code.innerHTML = code;
        if (name != "" || canCopy || isCompact)
        {
            const header: HTMLDivElement = document.createElement("div");
            header.classList.add("code-block__header");
            this.root.prepend(header)

            const headerName: HTMLDivElement = document.createElement("div");
            headerName.textContent = name;
            headerName.classList.add("c4");
            headerName.classList.add("code-block__name");
            header.appendChild(headerName);

            if (isCompact)
            {
                this.code.classList.add("compact");
                const expand: HTMLButtonElement = document.createElement("button");
                expand.textContent = "Expand";
                expand.classList.add("c4");
                expand.classList.add("code-block__button")
                expand.addEventListener("click", () =>
                {
                    this.ToggleExpand()
                });
                header.appendChild(expand);
            }

            if (canCopy)
            {
                const copy: HTMLButtonElement = document.createElement("button");
                copy.textContent = "Copy";
                copy.classList.add("c4");
                copy.classList.add("code-block__button");
                copy.addEventListener("click", () =>
                {
                    navigator.clipboard.writeText(code);
                });
                header.appendChild(copy);
            }
        }
    }

    private ToggleExpand()
    {
        if (!this.code.classList.contains("expand"))
        {
            this.code.classList.add("expand");
        }
        else
        {
            this.code.classList.remove("expand");
        }
    }
}