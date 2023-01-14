// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8p6gBidlt_Nn783GAzLknM76zKQ4Vjts",
    authDomain: "hackjmi.firebaseapp.com",
    projectId: "hackjmi",
    storageBucket: "hackjmi.appspot.com",
    messagingSenderId: "76162902587",
    appId: "1:76162902587:web:8864be99198a1d9948ca1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export default app;