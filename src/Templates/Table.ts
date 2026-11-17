import "../Documentation.css";

export const ColumnSpacing = {
    Equal: 0,
    Compact: 1,
    Extend: 2
} as const

export class Table extends HTMLElement
{
    private root!: HTMLTableElement;

    public Init()
    {
        this.root = document.createElement("table");
        this.appendChild(this.root);

        this.root.style.margin = "16px 0px 0px 0px";
        this.root.style.width = "100%";
        this.root.style.borderSpacing = "0px";
        this.root.style.tableLayout = "fixed";
    }

    public Configure(content: string[][], compactFirstColumn: number = ColumnSpacing.Equal, cellBorderWidth: number = 2, cellBorderColor: string = "#505050")
    {
        const colGroup = document.createElement('colgroup');
        const col1 = document.createElement('col');
        const col2 = document.createElement("col");
        col1.style.width = "50%";
        col2.style.width = "50%";
        colGroup.appendChild(col1);
        colGroup.appendChild(col2);
        this.root.appendChild(colGroup);
        switch (compactFirstColumn)
        {
            case ColumnSpacing.Compact:
                col1.style.width = "25%";
                col2.style.width = "75%";
                break;
            case ColumnSpacing.Extend:
                col1.style.width = "75%";
                col2.style.width = "25%";
                break;
        }

        for (let i = 0; i < content.length; i++)
        {
            const row: HTMLTableRowElement = document.createElement('tr');
            this.root.appendChild(row);
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