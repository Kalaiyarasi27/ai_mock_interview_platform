// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA4P-3nCzHku7n84p03wmwXTiXUbCuoSzY",
    authDomain: "prepwise-5c4ce.firebaseapp.com",
    projectId: "prepwise-5c4ce",
    storageBucket: "prepwise-5c4ce.appspot.com",
    messagingSenderId: "905193209359",
    appId: "1:905193209359:web:5b6eadcdc8e7d36d71ad7a",
    measurementId: "G-RDQB5KK9H6"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);