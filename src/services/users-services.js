import Collection from './services';

export class UsersCollection extends Collection {
  constructor() {
    super()

    this.collectionName = 'users';
  }

  getUser(username) {
    return this.readDocument(username)
  }
}

const usersCollection = new UsersCollection()

export default usersCollection