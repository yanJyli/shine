import Collection from './services';

export class FavoritesCollection extends Collection {
    constructor() {
        super();

        this.collectionName = 'favorites';
    }

    getCollection(id) {
        return this.readDocument(id);
    }

    getAllCollection(arr) {
        return this.readAllDocument(arr);
    }
}

const favoritesCollection = new FavoritesCollection();

export default favoritesCollection;
