import "firebase/compat/firestore";
import "firebase/compat/auth";

import firebase from "firebase/compat/app";

const config = {
  apiKey: "AIzaSyAVOGCQpNsHDo0tmwjHY2o9HN5g162T7YU",
  authDomain: "clothing-db-fae27.firebaseapp.com",
  projectId: "clothing-db-fae27",
  storageBucket: "clothing-db-fae27.appspot.com",
  messagingSenderId: "270305702033",
  appId: "1:270305702033:web:119430cd44c44ad2c38f30",
  measurementId: "G-H5CY6YJDWW"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;
  // console.log("userAuth ", userAuth);
  // const userRef = firestore.doc("users/1234586gfd");
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log("userRef,snapShot", userRef, snapShot);

  if (!snapShot.exists) {
    try {
      const { email, displayName } = userAuth;
      const createdAt = new Date();

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      alert("Error created", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// console.log("auth,firestore", auth, firestore);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// console.log("provider", provider);
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
