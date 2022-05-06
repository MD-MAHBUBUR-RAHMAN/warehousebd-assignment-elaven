// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-30d7FmDpbjjPQdCwIBR-WlIkhpypUIw",
  authDomain: "ware-house-management.firebaseapp.com",
  projectId: "ware-house-management",
  storageBucket: "ware-house-management.appspot.com",
  messagingSenderId: "855745893585",
  appId: "1:855745893585:web:a50c446da4b6ca6fefe1f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
