// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQkHNs_ToNtHbR3mPG6HM15y43GFsthIE",
  authDomain: "blog-app-5d6b2.firebaseapp.com",
  projectId: "blog-app-5d6b2",
  storageBucket: "blog-app-5d6b2.appspot.com",
  messagingSenderId: "66889234948",
  appId: "1:66889234948:web:7f481d326d918c93779351",
  measurementId: "G-CBP7WGR1CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
