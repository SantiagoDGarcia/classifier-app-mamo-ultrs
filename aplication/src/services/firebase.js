import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//import database from 'firebase/database';
import { getStorage } from "firebase/storage";
import {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_MEASUREMENTID,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
} from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENTID,
};
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
  apiKey: "AIzaSyBz08ps3YnMp4Z71UadBXqkCca6rmhu0Ao",
  authDomain: "mamaclasificator.firebaseapp.com",
  projectId: "mamaclasificator",
  storageBucket: "mamaclasificator.appspot.com",
  messagingSenderId: "563211464194",
  appId: "1:563211464194:web:5041596223b484ac23c11b",
  measurementId: "G-1F6BBQLY95",
};
*/
//export const databas = database()

//export const storage = getStorage(fireb);

export const fireb = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(fireb);
