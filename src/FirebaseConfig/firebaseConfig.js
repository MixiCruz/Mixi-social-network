// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_a4jGSRbic3PTKohwJV6Vj3IHRj1vvRY",
  authDomain: "mixi-instapet.firebaseapp.com",
  projectId: "mixi-instapet",
  storageBucket: "mixi-instapet.appspot.com",
  messagingSenderId: "805333824250",
  appId: "1:805333824250:web:65ec56945c393ef5ac0f43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logOut = () => {
  return signOut(auth);
};