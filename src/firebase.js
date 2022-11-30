// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2DMwkYerBHiTJVzvcZ8tUI_RIVFCy-zM",
  authDomain: "react-portfolio-dashboar-4c88e.firebaseapp.com",
  projectId: "react-portfolio-dashboar-4c88e",
  storageBucket: "react-portfolio-dashboar-4c88e.appspot.com",
  messagingSenderId: "939640507262",
  appId: "1:939640507262:web:605aba893a0b17ff02812f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth, provider)