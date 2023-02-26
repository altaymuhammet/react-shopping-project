import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, collection, getDoc, setDoc, doc } from "firebase/firestore";

const myApiKey = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: myApiKey,
  authDomain: "shopping-project-4b0ec.firebaseapp.com",
  projectId: "shopping-project-4b0ec",
  storageBucket: "shopping-project-4b0ec.appspot.com",
  messagingSenderId: "818510905435",
  appId: "1:818510905435:web:224e65b111cb5dc1b87f7e",
  measurementId: "G-44YGZGKEQE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  app,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  provider,
  signInWithPopup,
  signOut,
  collection,
  getDoc,
  setDoc,
  doc,
  onAuthStateChanged
};
