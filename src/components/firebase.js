/** @format */

import firebase from "firebase";
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1psJcfETgnskDjnA2CNH4xGCcA973M58",
  authDomain: "tomato-layz.firebaseapp.com",
  databaseURL: "https://tomato-layz.firebaseio.com",
  projectId: "tomato-layz",
  storageBucket: "tomato-layz.appspot.com",
  messagingSenderId: "806213336169",
  appId: "1:806213336169:web:a17c9a889d493e4e6336f8",
  measurementId: "G-62JEWBY47Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
