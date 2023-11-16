// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: "linkedin3-aef2f.firebaseapp.com",
//     projectId: "linkedin3-aef2f",
//     storageBucket: "linkedin3-aef2f.appspot.com",
//     messagingSenderId: "812951779389",
//     appId: "1:812951779389:web:b4d6daec9c5d8527339254",
//     measurementId: "G-65XG69EL0G"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbYbQwIB5wdDiiZS8GXURDzo3980ja0Pc",
    authDomain: "linkedin3-aef2f.firebaseapp.com",
    projectId: "linkedin3-aef2f",
    storageBucket: "linkedin3-aef2f.appspot.com",
    messagingSenderId: "812951779389",
    appId: "1:812951779389:web:b4d6daec9c5d8527339254",
    measurementId: "G-65XG69EL0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

// Export the services for use in other files
export { db, auth, };
