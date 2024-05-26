// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJVj38iEfAB-SyDUfrGpGZqJBoIZ7T7EY",
  authDomain: "etsy-f0e6c.firebaseapp.com",
  projectId: "etsy-f0e6c",
  storageBucket: "etsy-f0e6c.appspot.com",
  messagingSenderId: "593778295122",
  appId: "1:593778295122:web:a00441b6f79c32b1373a8b",
  measurementId: "G-GCZCMLN0H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}