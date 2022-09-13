// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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





export const getProducts = async (categoryId) => {
  if (categoryId) {
    return await getProductsByCategoryId(categoryId);
  } else {
    return await getAllProducts();
  }
};

export const getProductById = async (productId) => {
  if (!productId) throw new Error("Missing productId");

  return (await getDoc(doc(db, "items", productId))).data();
};

export const getProductsByCategoryId = async (categoryId) => {
  if (!categoryId) throw new Error("Missing categoryId");

  const itemCollection = collection(db, "items");
  const q = query(itemCollection, where("category", "==", categoryId));
  return await getDocs(q);
};

export const getAllProducts = async () => {
  const itemCollection = collection(db, "items");
  const q = query(itemCollection);
  return await getDocs(q);
};

/*export const sendOrder = async () => {
  const order = {
    buyer : {name: "agustin", phone:"111", email: "a@a.com"},
    items: [{name: "print",price:100}],
    total: 100
  };
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");
};*/



// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth();

export { app, storage, db, auth};
