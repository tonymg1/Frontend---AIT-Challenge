// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMaThv1HWH0Ou0nYfX14FPC1y4EB09ke4",
  authDomain: "probando-e3408.firebaseapp.com",
  projectId: "probando-e3408",
  storageBucket: "probando-e3408.appspot.com",
  messagingSenderId: "762004068965",
  appId: "1:762004068965:web:ca515f87dbc4c811e9c48c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)