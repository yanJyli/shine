import Collection from './services';
import { where } from 'firebase/firestore';

export class CartCollection extends Collection {
    constructor() {
        super()

        this.collectionName = 'cart';
    }

    getCollection(id) {
        return this.readDocument(id)
    }

    getCollectionByUsername(username) {
        return this.getDocuments(where('username', '==', username))
    }
}

const cartCollection = new CartCollection()

export default cartCollection
