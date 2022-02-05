import { arrayUnion } from "firebase/firestore";
import Collection from "./collection";

export class ClothesCollection extends Collection {
  constructor() {
    super();

    this.collectionName = "collection";
  }

  getCollection(id) {
    return this.readDocument(id);
  }

  likePost(id, username) {
    return this.updateDocument(id, { likes: arrayUnion(username) });
  }

  addComment(id, data) {
    return this.updateDocument(id, { comments: arrayUnion(data) });
  }
}

const clothesCollection = new ClothesCollection();

export default clothesCollection;
