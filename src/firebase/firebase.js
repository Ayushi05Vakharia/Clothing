// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig =

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log("app analytics", app, analytics);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

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

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
console.log("auth,firestore", auth, firestore);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
console.log("provider", provider);
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
