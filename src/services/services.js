import { collection, addDoc, doc, setDoc, getDoc, query, getDocs, updateDoc, onSnapshot, where } from 'firebase/firestore';
import { db } from '../firebase';

export default class Collection {
  createDocument(data, id) {
    if (!id) {
      return addDoc(collection(db, this.collectionName), data);
    }

    return setDoc(doc(db, this.collectionName, id), data);
  }

  async readDocument(id) {
    const docRef = doc(db, this.collectionName, id);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }

    return null;
  }

  async readAllDocument(arr) { 
    const q = query(collection(db, this.collectionName), where("src", "==", true))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      arr.push(doc.data())
    })
    return arr
  }

  updateDocument(id, data) {
    const docRef = doc(db, this.collectionName, id);

    return updateDoc(docRef, data);
  }

  deleteDocument() {}

  async getDocuments(where) {
    const q = query(collection(db, this.collectionName), where);

    const querySnapshot = await getDocs(q);

    const result = [];

    querySnapshot.forEach((doc) => result.push({ id: doc.id, ...doc.data() }));

    return result;
  }

  subscribeToDocument(callback) {
    const unsub = onSnapshot(doc(db, this.collectionName), (doc) => {
      callback(doc.data());
    });
  } 
}
