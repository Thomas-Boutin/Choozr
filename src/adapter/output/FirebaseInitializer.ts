import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBFpiFdqsvMHK9Rby-yEkYYvNJznkrxzRw",
    authDomain: "choozr-ccb67.firebaseapp.com",
    projectId: "choozr-ccb67",
    storageBucket: "choozr-ccb67.appspot.com",
    messagingSenderId: "864093359105",
    appId: "1:864093359105:web:fa1f154b16bd2e8f7a0400"
};

export const app = initializeApp(firebaseConfig);