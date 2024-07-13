// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRSi5G_K7xruSWz1aT_AyYero7-Di9Z-g",
  authDomain: "assignment-9-ba242.firebaseapp.com",
  projectId: "assignment-9-ba242",
  storageBucket: "assignment-9-ba242.appspot.com",
  messagingSenderId: "104836800318",
  appId: "1:104836800318:web:50d1fb6c46b42296d3966f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();