import Collection from "./collection";
import { where } from "firebase/firestore";

export class OrderCollection extends Collection {
  constructor() {
    super();

    this.collectionName = "order";
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

const orderCollection = new OrderCollection();

export default orderCollection;
