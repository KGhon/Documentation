import "../Documentation.css"
import { ContentPage } from "../Templates/ContentPage.ts";

export function Construct(): HTMLDivElement
{
    const root: ContentPage = document.createElement("div", { is: "content-page" }) as ContentPage;
    root.Configure("Oops! You shouldn't be seeing this!", "Navigation Error");

    return root;
}
