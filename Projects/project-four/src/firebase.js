// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fKa0nMJBkkpE2FYLRGdaLEaE6Lj8fDw",
  authDomain: "iblog-galsan.firebaseapp.com",
  projectId: "iblog-galsan",
  storageBucket: "iblog-galsan.appspot.com",
  messagingSenderId: "485311506432",
  appId: "1:485311506432:web:946a34b256a51f349ed0e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);