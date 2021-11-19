import firebase from 'firebase/compat/app';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZUymVhwT8OqYLeL0TUUKGTCq7UQ-pCvg",
  authDomain: "chat-app-fe801.firebaseapp.com",
  projectId: "chat-app-fe801",
  storageBucket: "chat-app-fe801.appspot.com",
  messagingSenderId: "961322219303",
  appId: "1:961322219303:web:f9b0f20d05240c5427db02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();
const db = getFirestore();

export { db, auth, ggProvider, fbProvider, signInWithPopup, signOut };
export default firebase;