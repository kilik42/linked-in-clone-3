// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "linkedin3-aef2f.firebaseapp.com",
    projectId: "linkedin3-aef2f",
    storageBucket: "linkedin3-aef2f.appspot.com",
    messagingSenderId: "812951779389",
    appId: "1:812951779389:web:b4d6daec9c5d8527339254",
    measurementId: "G-65XG69EL0G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { db, auth };