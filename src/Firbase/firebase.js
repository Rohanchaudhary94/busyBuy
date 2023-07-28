// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXmmgfzCHIbwL7vRx6ac_0y4ozAZrgoqA",
  authDomain: "busybuy-8c412.firebaseapp.com",
  projectId: "busybuy-8c412",
  storageBucket: "busybuy-8c412.appspot.com",
  messagingSenderId: "1083231987311",
  appId: "1:1083231987311:web:7f9aff1aa739bad69c8f9a"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
