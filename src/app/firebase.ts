// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHQWivpK9DnAVUndJYjmJKDKToB1MdPrc",
  authDomain: "aurora-4eb39.firebaseapp.com",
  projectId: "aurora-4eb39",
  storageBucket: "aurora-4eb39.appspot.com",
  messagingSenderId: "106222927855",
  appId: "1:106222927855:web:98211266f63652b37e001a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
