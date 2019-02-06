export class MetaData {

    constructor(title?: string, description?: string, image?: string) {
        title ? this.title = title : this.title = '';
        description ? this.description = description : this.description = '';
        image ? this.image = image : this.image = '';
    }

    title: string;
    description: string;
    image: string;


    map(data: any) {
        for (const key in data) {
            if (data[key]) {
                this[key] = data[key];
            }
        }
    }

}
