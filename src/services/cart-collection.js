import Collection from "./collection";
import { where } from "firebase/firestore";

export class CartCollection extends Collection {
  constructor() {
    super();

    this.collectionName = "cart";
  }

  getCollection(id) {
    return this.readDocument(id);
  }

  getCollectionByUsername(username) {
    return this.getDocuments(where("username", "==", username));
  }

  deletetCollection(id) {
    return this.deleteDocument(id);
  }
}

const cartCollection = new CartCollection();

export default cartCollection;
