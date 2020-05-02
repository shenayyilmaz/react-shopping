import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGb1dcWzfGWmQWfs3njs7fzuW1S2Mj4-s",
  authDomain: "crwn-db-77a34.firebaseapp.com",
  databaseURL: "https://crwn-db-77a34.firebaseio.com",
  projectId: "crwn-db-77a34",
  storageBucket: "crwn-db-77a34.appspot.com",
  messagingSenderId: "99022180083",
  appId: "1:99022180083:web:5da2da85093e3cb920f186",
  measurementId: "G-F910KK5WVP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
