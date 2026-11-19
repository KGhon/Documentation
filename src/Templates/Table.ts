import "../Documentation.css";
import "./Table.css";

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
        this.root.classList.add("table__root");
        this.appendChild(this.root);
    }

    public Configure(content: string[][], compactFirstColumn: number = ColumnSpacing.Equal)
    {
        const colGroup = document.createElement("colgroup");
        const col1 = document.createElement("col");
        const col2 = document.createElement("col");
        colGroup.appendChild(col1);
        colGroup.appendChild(col2);
        this.root.appendChild(colGroup);
        switch (compactFirstColumn)
        {
            default:
                col1.classList.add("table__column-equal");
                col2.classList.add("table__column-equal");
                break;
            case ColumnSpacing.Compact:
                col1.classList.add("table__column-compact");
                col2.classList.add("table__column-extend");
                break;
            case ColumnSpacing.Extend:
                col1.classList.add("table__column-extend");
                col2.classList.add("table__column-compact");
                break;
        }

        for (let i = 0; i < content.length; i++)
        {
            const row: HTMLTableRowElement = document.createElement("tr");
            this.root.appendChild(row);
            for (let j = 0; j < content[i].length; j++)
            {
                const cell: HTMLTableCellElement = document.createElement("td");
                cell.classList.add("table__cell");
                cell.innerHTML = content[i][j]
                cell.classList.add("c4");
                row.appendChild(cell);
            }
        }
    }
}