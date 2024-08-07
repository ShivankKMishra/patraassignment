// patraassignment/Lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl19zK1Anz1g1h2nbAr5vrkFmCTTlTTZk",
  authDomain: "patra-a5c10.firebaseapp.com",
  projectId: "patra-a5c10",
  storageBucket: "patra-a5c10.appspot.com",
  messagingSenderId: "860315613587",
  appId: "1:860315613587:web:8d500dd96ee66ab10d1066",
  measurementId: "G-DVRQ16MQSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
