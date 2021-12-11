export class Place {
    name: string
    type: string;
    picture: string;
    crowdPercentage: number[];

    constructor(name: string, type: string, picture: string, crowdPercentage: number[]) {
        this.name = name;
        this.type = type;
        this.picture = picture;
        this.crowdPercentage = crowdPercentage;
    }
}
