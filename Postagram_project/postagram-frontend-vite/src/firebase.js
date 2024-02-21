// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMMHwPhTSlBYAkNkEQv-MWONy5FqaQVrQ",
  authDomain: "tornado-authentication-galsan.firebaseapp.com",
  projectId: "tornado-authentication-galsan",
  storageBucket: "tornado-authentication-galsan.appspot.com",
  messagingSenderId: "895754660616",
  appId: "1:895754660616:web:866cb4f612c901e611dabd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);