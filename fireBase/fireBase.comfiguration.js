 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAuth} from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBXtORreKDdH3_FBlpLVnbF4u6VvydSxPs",
   authDomain: "grocery-5b0d2.firebaseapp.com",
   projectId: "grocery-5b0d2",
   storageBucket: "grocery-5b0d2.appspot.com",
   messagingSenderId: "420546576409",
   appId: "1:420546576409:web:04b6d4287310b5f4fa2a88",
   measurementId: "G-8N59SVDK0V"
 };

// Initialize Firebase
 export const FIREBASE_APP = initializeApp(firebaseConfig);
 export const FIREBASE_AUTH = getAuth(FIREBASE_APP);