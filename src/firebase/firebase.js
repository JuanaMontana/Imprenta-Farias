// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
  limit,
  orderBy,
  addDoc,
  setDoc,
  writeBatch,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXGLpSH6L22tGZVrQ9iBnV-sr8NIOsJzM",
  authDomain: "imprenta-farias.firebaseapp.com",
  projectId: "imprenta-farias",
  storageBucket: "imprenta-farias.appspot.com",
  messagingSenderId: "34020098552",
  appId: "1:34020098552:web:843ced6d611cf28274d60d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const getItems = () => {
  const colRef = collection(db, 'items'); // referencia a la collection
  const q = query(colRef);
  return getDocs(q);
};

export const getDetailItem = (id) => {
  const docRef = doc(db, 'items', id); //referencia a el document
  return getDoc(docRef);
};

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth();
export { app, storage, db, auth};
