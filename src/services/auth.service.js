import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class AuthDataService{
    addUsers = (newUser) => {
      return addDoc(userCollectionRef, newUser);
    };
  
    getUsers = (id) => {
      const userDoc = doc(db, "users", id);
      return getDoc(userDoc);
    };
  
    getAllUsers = () => {
      return getDocs(userCollectionRef);
    };
  }
  
  export default new AuthDataService();