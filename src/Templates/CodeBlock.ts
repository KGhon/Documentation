import "../Documentation.css";

export class CodeBlock extends HTMLDivElement
{
    private code: HTMLDivElement;
    private isExpanded: boolean = false;
    public constructor()
    {
        super();

        this.style.display = "grid";
        this.style.boxSizing = "border-box";
        this.style.borderStyle = "solid";
        this.style.borderColor = "#505050";

        this.code = document.createElement('div');
        this.appendChild(this.code);
    }

    public async Configure(code: string, canCopy: boolean, isCompact: boolean, name: string = "", borderWidth: number = 4, margin: string = "20px 50px 0px 50px", padding: string = "0")
    {
        this.code.innerHTML = code;
        this.code.style.display = "grid";
        this.code.style.width = "100%";
        this.code.style.overflowX = "auto";
        this.code.style.boxSizing = "border-box";
        this.style.margin = margin;
        this.style.padding = padding;
        this.style.borderWidth = `0px ${borderWidth}px ${borderWidth}px ${borderWidth}px`;
        if (name != "" || canCopy || isCompact)
        {
            const header: HTMLDivElement = document.createElement('div');
            header.style.padding = `${borderWidth}px 0px ${borderWidth}px 0px`;
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

            if (isCompact)
            {
                this.code.style.height = "300px";
                this.code.style.overflowY = "auto";
                const expand: HTMLButtonElement = document.createElement('button');
                expand.style.color = "white";
                expand.style.backgroundColor = "#555555";
                expand.style.borderStyle = "solid";
                expand.style.borderWidth = "2px";
                expand.style.borderColor = "#707070";
                expand.textContent = "Expand";
                expand.classList.add("c4");
                expand.addEventListener("click", () =>
                {
                    this.ToggleExpand()
                });
                expand.addEventListener("mousedown", () =>
                {
                    expand.style.backgroundColor = "#888888";
                });
                expand.addEventListener("mouseup", () =>
                {
                    expand.style.backgroundColor = "#707070";
                });
                expand.addEventListener("mouseover", () =>
                {
                    expand.style.backgroundColor = "#707070";
                });
                expand.addEventListener("mouseout", () =>
                {
                    expand.style.backgroundColor = "#555555";
                });
                header.appendChild(expand);
            }

            if (canCopy)
            {
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
        }
        else
        {
            this.style.borderWidth = `${borderWidth}px`;
        }
    }

    private ToggleExpand()
    {
        if (!this.isExpanded)
        {
            this.code.style.height = "auto";
            this.code.style.overflowY = "";
            this.isExpanded = true;
        }
        else
        {
            this.code.style.height = "300px";
            this.code.style.overflowY = "auto";
            this.isExpanded = false;
        }
    }
}