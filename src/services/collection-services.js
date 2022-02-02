import { arrayUnion } from 'firebase/firestore';
import Collection from './services';

export class ClothesCollection extends Collection {
  constructor() {
    super()

    this.collectionName = 'collection';
  }

  getCollection(id) {
    return this.readDocument(id)
  }

  addComment(id, data) {
    return this.updateDocument(id, { comments: arrayUnion(data) })
  }

  likePost(id, username) {
    return this.updateDocument(id, { likes: arrayUnion(username) })
  }
}

const clothesCollection = new ClothesCollection()

export default clothesCollection
