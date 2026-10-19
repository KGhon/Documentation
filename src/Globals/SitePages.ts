export class SitePages
{
    //If folder should link to a page, add it before pages or folders it will contain
    public static readonly pages: Map<string, [folder: string, path: string]> = new Map([
        ['AudioProduction', ['AudioProduction', '']],
        ['GUIToolkit', ['AudioProduction', '']]
    ]);

    public static readonly contentLocation: string = 'src/Content';
}