import firebase from "firebase";
import "firebase/auth";
import firebaseKey from "../config/firebaseKey.json";

firebaseKey.apiKey = process.env.REACT_APP_KEY;
let firebaseui = require("firebaseui");
firebase.initializeApp(firebaseKey);

export const auth = firebase.auth();

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  console.log("signOut");
  return auth.signOut();
};
