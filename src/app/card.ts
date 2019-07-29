export class My_Card{
    name : string;
    cmc : number;
    colors : string[];
    printings: string[];
    imageUrl: string;

    public My_Card(name: string, cmc: number, colors: string[],
        printings: string[], imageUrl: string){
            this.name = name;
            this.cmc = cmc;
            this.colors = colors;
            this.printings = printings;
            this.imageUrl = imageUrl;
    }
}