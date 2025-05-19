import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBS-XYebzVd6pHT7_hBzaVOf3PZfQGUisg",
    authDomain: "jobprep-f862b.firebaseapp.com",
    projectId: "jobprep-f862b",
    storageBucket: "jobprep-f862b.firebasestorage.app",
    messagingSenderId: "573827499683",
    appId: "1:573827499683:web:23e87c6c4974f28378a116",
    measurementId: "G-R6CS3S9LYD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);