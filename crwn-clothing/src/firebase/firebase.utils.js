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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (err) {
        console.log("error creating user", err.message);
      }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;