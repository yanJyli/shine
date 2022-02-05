import Collection from "./collection";

export class UsersCollection extends Collection {
  constructor() {
    super();

    this.collectionName = "users";
  }

  getUser(username) {
    return this.readDocument(username);
  }

  setUser(id, values) {
    const data = {
      username: values,
    };
    return this.createDocument(id, data);
  }
}

const usersCollection = new UsersCollection();

export default usersCollection;
