// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj2-YvUs4-VdgYPzkTp7FHjQ8H0eLMp6Y",
    authDomain: "devlinks-hng-8.firebaseapp.com",
    projectId: "devlinks-hng-8",
    storageBucket: "devlinks-hng-8.appspot.com",
    messagingSenderId: "290009761564",
    appId: "1:290009761564:web:3e3b2fea98e0ca622a9cd9",
    measurementId: "G-QWMRE0DQG8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const db = getFirestore();