import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNbPJ77Z7YVtK_xP7g5HxkMKP6sef3ND4",
  authDomain: "rival-cms.firebaseapp.com",
  projectId: "rival-cms",
  storageBucket: "rival-cms.appspot.com",
  messagingSenderId: "429893204617",
  appId: "1:429893204617:web:5fbfba04f9c8ead21d6458"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth()