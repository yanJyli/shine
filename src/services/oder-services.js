import Collection from './services';
import { where } from 'firebase/firestore';
export class OderCollection extends Collection {
    constructor() {
        super();

        this.collectionName = 'oder';
    }

    getCollection(id) {
        return this.readDocument(id);
    }

    getCollectionByUsername(username) {
        return this.getDocuments(where('username', '==', username));
    }
}

const oderCollection = new OderCollection();

export default oderCollection;
