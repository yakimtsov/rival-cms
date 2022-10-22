import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const postCollectionRef = collection(db, "posts");

class PostDataService {
  addPosts = (newPost) => {
    return addDoc(postCollectionRef, newPost);
  };

  updatePosts = (id, updatedPost) => {
    const postDoc = doc(db, "books", id);
    return updateDoc(postDoc, updatedPost);
  };

  deletePost = (id) => {
    const postDoc = doc(db, "posts", id);
    return deleteDoc(postDoc);
  };

  getAllPosts = () => {
    return getDocs(postCollectionRef);
  };

  getPosts = (id) => {
    const postDoc = doc(db, "posts", id);
    return getDoc(postDoc);
  };
}

export default new PostDataService();