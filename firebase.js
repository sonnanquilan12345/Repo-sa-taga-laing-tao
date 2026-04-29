// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH7_T97XsJ3fnjKT6fn0fuGQ3wqpDUzMM",
  authDomain: "licdan.firebaseapp.com",
  projectId: "licdan",
  storageBucket: "licdan.firebasestorage.app",
  messagingSenderId: "64868252854",
  appId: "1:64868252854:web:84b9c31cbb7c5c9a06ba17",
  measurementId: "G-FGMVME0WVL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);