import "../Documentation.css";

export class Table extends HTMLTableElement
{
    public constructor()
    {
        super();

        this.style.margin = "16px 0px 0px 0px";
        this.style.width = "100%";
        this.style.borderSpacing = "0px";
        this.style.tableLayout = "fixed";
    }

    public Configure(content: string[][], cellBorderWidth: number = 2, cellBorderColor: string = "#505050")
    {
        for (let i = 0; i < content.length; i++)
        {
            const row: HTMLTableRowElement = document.createElement('tr');
            this.appendChild(row);
            for (let j = 0; j < content[i].length; j++)
            {
                const cell: HTMLTableCellElement = document.createElement('td');
                cell.style.borderStyle = "solid";
                cell.style.borderColor = cellBorderColor;
                if (i == 0)
                {
                    cell.style.borderTopWidth = cellBorderWidth.toString() + "px";
                    cell.style.borderBottomWidth = (cellBorderWidth / 2).toString() + "px";

                }
                else if (i == content.length - 1)
                {
                    cell.style.borderTopWidth = (cellBorderWidth / 2).toString() + "px";
                    cell.style.borderBottomWidth = cellBorderWidth.toString() + "px";
                }
                else
                {
                    cell.style.borderTopWidth = (cellBorderWidth / 2).toString() + "px";
                    cell.style.borderBottomWidth = (cellBorderWidth / 2).toString() + "px";
                }

                if (j == 0)
                {
                    cell.style.borderLeftWidth = cellBorderWidth.toString() + "px";
                    cell.style.borderRightWidth = (cellBorderWidth / 2).toString() + "px";
                }
                else if (j == content[i].length - 1)
                {
                    cell.style.borderLeftWidth = (cellBorderWidth / 2).toString() + "px";
                    cell.style.borderRightWidth = cellBorderWidth.toString() + "px";
                }
                else
                {
                    cell.style.borderLeftWidth = (cellBorderWidth / 2).toString() + "px";
                    cell.style.borderRightWidth = (cellBorderWidth / 2).toString() + "px";
                }
                cell.style.padding = "10px";
                cell.innerHTML = content[i][j]
                cell.classList.add('c4');
                row.appendChild(cell);
            }
        }
    }
}