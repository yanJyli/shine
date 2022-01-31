import Collection from './services';

export class OderCollection extends Collection {
    constructor() {
        super();

        this.collectionName = 'oder';
    }

    getCollection(id) {
        return this.readDocument(id);
    }

    getAllCollection(arr) {
        return this.readAllDocument(arr);
    }
}

const oderCollection = new OderCollection();

export default oderCollection;
