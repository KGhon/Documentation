import "../Documentation.css";

export class CodeBlock extends HTMLDivElement
{
    private code: HTMLDivElement;
    public constructor()
    {
        super();

        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.borderStyle = "solid";
        this.style.borderWidth = "0px 4px 4px 4px";
        this.style.borderColor = "#505050";

        this.code = document.createElement('div');
        this.appendChild(this.code);
    }

    public async Configure(code: string, canCopy: boolean, name: string = "")// language: string, canCopy: boolean, displayTheme: string = "dark-plus")
    {
        this.code.innerHTML = code;
        if (name != "" || canCopy)
        {
            const header: HTMLDivElement = document.createElement('div');
            header.style.padding = " 4px 0px 4px 0px";
            header.style.display = "flex";
            header.style.flexDirection = "row";
            header.style.backgroundColor = "#505050";
            this.prepend(header)

            const headerName: HTMLLabelElement = document.createElement('label');
            headerName.style.display = "flex";
            headerName.style.flexGrow = "1";
            headerName.style.textIndent = "16px";
            headerName.textContent = name;
            headerName.classList.add("c4");
            header.appendChild(headerName);

            const copy: HTMLButtonElement = document.createElement('button');
            copy.style.color = "white";
            copy.style.backgroundColor = "#555555";
            copy.style.borderStyle = "solid";
            copy.style.borderWidth = "2px";
            copy.style.borderColor = "#707070";
            copy.textContent = "Copy";
            copy.classList.add("c4");
            copy.addEventListener("click", () =>
            {
                navigator.clipboard.writeText(code);
            });
            copy.addEventListener("mousedown", () =>
            {
                copy.style.backgroundColor = "#888888";
            });
            copy.addEventListener("mouseup", () =>
            {
                copy.style.backgroundColor = "#707070";
            });
            copy.addEventListener("mouseover", () =>
            {
                copy.style.backgroundColor = "#707070";
            });
            copy.addEventListener("mouseout", () =>
            {
                copy.style.backgroundColor = "#555555";
            });
            header.appendChild(copy);
        }
        else
        {
            this.style.borderWidth = "4px";
        }
    }
}