export class TableOfContents extends HTMLDivElement
{
    private indentation: number = 30;

    public constructor()
    {
        super();
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.position = "sticky";
        this.style.top = "10vh";
        this.style.maxHeight = "100vh";
        this.style.overflowY = "auto";
        this.style.overflowX = "hidden";
    }

    public connectedCallback()
    {
        let contentMatches: NodeListOf<HTMLElement> = document.querySelectorAll('.c1, .c2, .c3');
        for (const match of contentMatches)
        {
            const link: HTMLAnchorElement = document.createElement('a');
            link.textContent = match.textContent;
            link.addEventListener("click", (evt) => {
                evt.preventDefault()
                match.scrollIntoView({ block: 'start' });
            });
            if (match.classList.contains('c1'))
            {
                link.style.margin = `0px 0px 0px ${this.indentation * 1}px`;
            }
            else if (match.classList.contains('c2'))
            {
                link.style.margin = `0px 0px 0px ${this.indentation * 2}px`;
            }
            else if (match.classList.contains('c3'))
            {
                link.style.margin = `0px 0px 0px ${this.indentation * 3}px`;
            }
            this.appendChild(link);
        }
    }
}