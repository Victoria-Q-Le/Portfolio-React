// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAigATY1zG5TaLyTOI4eeInzaNaSmKRBA",
  authDomain: "react-portfolio-dashboar-4694a.firebaseapp.com",
  projectId: "react-portfolio-dashboar-4694a",
  storageBucket: "react-portfolio-dashboar-4694a.appspot.com",
  messagingSenderId: "527862268690",
  appId: "1:527862268690:web:1191f74e18cab7524569cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
////////////////////////////GOALS////////////////////
//1. Create a method to log in (in this case I used gg sign in method and export that)
//  Step 1: Authorization
export const auth = getAuth()
//  Step 2: Provider
const provider = new GoogleAuthProvider()
//  Step 3: export the method
export const signInWithGoogle = () => signInWithPopup(auth, provider)



//2. Create a method to store the image in firebase storage to upload and store the portfolio uploaded img 
export const storage = getStorage(app)
export const db = getFirestore(app) //the actual db of all the portfolios