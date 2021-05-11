import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDhZ8SdpD3IqXWcEm3ia_PjYRvTqfNX6LE",
    authDomain: "crwn-db-471d6.firebaseapp.com",
    projectId: "crwn-db-471d6",
    storageBucket: "crwn-db-471d6.appspot.com",
    messagingSenderId: "285988158101",
    appId: "1:285988158101:web:f8a9c393e82d7a14a8f99c",
    measurementId: "G-39PEEZQ51H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;