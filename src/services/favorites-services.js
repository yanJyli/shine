import Collection from './services';
import { where } from 'firebase/firestore';

export class FavoritesCollection extends Collection {
    constructor() {
        super()

        this.collectionName = 'favorites';
    }

    getCollection(id) {
        return this.readDocument(id)
    }

    getCollectionByUsername(username) {
        return this.getDocuments(where('username', '==', username))
    }

    deletetCollection(data) {
        return this.deleteDocument(data)
    }

}

const favoritesCollection = new FavoritesCollection()

export default favoritesCollection
