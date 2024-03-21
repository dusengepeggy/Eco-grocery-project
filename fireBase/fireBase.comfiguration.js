 import { initializeApp } from "firebase/app";
 import { getAuth} from "firebase/auth";
 import {collection, getDocs, getFirestore} from "firebase/firestore"
 
 const firebaseConfig = {
  apiKey: "AIzaSyC0iWxrUoIFfEws9of7oH-V5YWQKsw-9Ak",
  authDomain: "ecogroceryproject.firebaseapp.com",
  projectId: "ecogroceryproject",
  storageBucket: "ecogroceryproject.appspot.com",
  messagingSenderId: "605824130258",
  appId: "1:605824130258:web:4ad69fe36fb9fd4012e10b"
};

// Initialize Firebase
 export const FIREBASE_APP = initializeApp(firebaseConfig);
 export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
 export const FIRESTORE_DB= getFirestore(FIREBASE_APP)
 export const colRef=collection(FIRESTORE_DB, 'ItemsInStock')
 