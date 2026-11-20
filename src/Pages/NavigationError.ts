import "../Documentation.css"
import { ContentPage } from "../Templates/ContentPage.ts";

export function Construct(): HTMLElement
{
    const root: ContentPage = document.createElement("content-page") as ContentPage;
    root.Init();
    root.Configure("Oops! You shouldn't be seeing this!");

    return root;
}
