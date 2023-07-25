import { initializeApp } from "firebase/app";
import {
  DocumentSnapshot,
  getDocs,
  getFirestore,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import database from 'firebase/database';
import {
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect } from "react";
import AppContext from "../../hooks/createContext";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_MEASUREMENTID,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
} from "@env";
import { showAlert, timeConverter } from "../helpers";
import { t } from "i18next";

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
export const fireb = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(fireb);
/*
const appCheck = initializeAppCheck(fireb, {
  provider: new ReCaptchaV3Provider(REACT_APP_FIREBASE_APICHECK),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
*/
export function logOut(): void {
  signOut(auth)
    .then(() => {
      console.log("User logout | ");
    })
    .catch((error) => {
      console.error("ERROR LOGOUT ", error);
    });
}

export function observerAuth(): void {
  const {
    userData: [, setUser],
  } = useContext(AppContext)!;
  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, async function (user) {
      console.log("__Onauthchang");
      if (user) {
        const x = auth.currentUser!.uid;
        const userRef = doc(db, "Users", x);
        const userDoc = await getDoc(userRef);
        const userFirestore: any = userDoc.data();

        setUser({
          name: userFirestore.name,
          email: user.email,
          createdAt: timeConverter(user.metadata.creationTime!),
          organization: userFirestore.organization,
        });
        // @ts-ignore
        navigation.navigate("AnalysisNav");
      } else {
        setUser(null);
      }
    });
  }, []);
}

export function sendEmailOnReset(email: string): void {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      showAlert(`${t("alert:sendingResetPasswordEmail")}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function loginUser(
  email: string,
  password: string
): Promise<void> {
  try {
    await signInWithEmailAndPassword(auth, email, password).catch((error) => {
      if (
        error.code === AuthErrorCodes.INVALID_PASSWORD ||
        error.code === "auth/user-not-found"
      ) {
        showAlert(`${t("alert:errorLoginCredentials")}`);
      } else {
        showAlert(`${t("alert:errorGeneric")}`);
      }
    });
  } catch (error: any) {
    console.log(error.code);
    showAlert(`${t("alert:errorRequestLoginFirebase")}`);
  }
}

export function registerUserAuth(
  email: string,
  password: string,
  name: string,
  organization: string
): void {
  async function registerUserFirestore(
    user: any,
    email: string,
    name: string,
    organization: string
  ): Promise<void> {
    var userData = {
      userId: user.user.uid,
      name: name,
      email: email,
      organization: organization,
    };

    const userRef = collection(db, "Users");
    await setDoc(doc(userRef, user.user.uid), userData);
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      registerUserFirestore(user, email, name, organization)
        .then((user) => {
          console.log("Usuario registrado");
        })
        .catch((error) => {
          console.log("Error FIREE", error);
          throw error;
        });
    })
    .catch((error) => {
      console.log("Error AUTTTT", error);
      throw error;
    });
}

export async function changeUserPassword(
  oldPassword: string,
  newPassword: string
): Promise<void> {
  const user = auth.currentUser!;
  const credential = EmailAuthProvider.credential(user.email!, oldPassword);

  await reauthenticateWithCredential(user, credential)
    .then(() => {
      updatePassword(user, newPassword)
        .then(() => {
          showAlert(`${t("alert:changePasswordOk")}`);
        })
        .catch((error) => {
          showAlert("Error");
        });
    })
    .catch((error) => {
      if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        showAlert(`${t("alert:errorChangePassword")}`);
      } else {
        console.log(error);
      }
    });
}

export async function getResultData(idResult: string): Promise<any> {
  const userId = auth.currentUser!.uid;
  const docRef = doc(db, "Users", userId, "HistResults", idResult);

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), 6 * 60 * 1000)
  );
  const docSnapPromise = getDoc(docRef);

  const result = await Promise.race([docSnapPromise, timeoutPromise]);

  return result;
}

export async function getAllResultsDatal(): Promise<any[]> {
  const userId = auth.currentUser?.uid!;
  const getHist = await getDocs(collection(db, "Users", userId, "HistResults"));

  const resultsList: any[] = [];
  getHist.docs.forEach((doc) => {
    resultsList.push({
      idResult: doc.id,
      url: doc.data().url,
      typeAnalysis: doc.data().typeAnalysis,
      dateAnalysis: doc.data().dateAnalysis,
      imgUrl: doc.data().imgUrl,
      imgRoiUrl: doc.data().imgRoiUrl,
      testResult: doc.data().testResult,
      precision: doc.data().precision,
      accuracy: doc.data().accuracy,
      recall: doc.data().recall,
      f1: doc.data().f1,
    });
  });
  return resultsList;
}

export async function getAllResultsData(): Promise<any[]> {
  const userId = auth.currentUser?.uid!;
  const getHistPromise = getDocs(
    query(
      collection(db, "Users", userId, "HistResults"),
      orderBy("dateAnalysis", "desc")
    )
  );

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), 6 * 60 * 1000)
  );

  const getHist = (await Promise.race([
    getHistPromise,
    timeoutPromise,
  ])) as QuerySnapshot;

  const resultsList: any[] = [];
  getHist.docs.forEach((doc: DocumentSnapshot) => {
    resultsList.push({
      idResult: doc.id,
      url: doc.data()!.url,
      typeAnalysis: doc.data()!.typeAnalysis,
      dateAnalysis: doc.data()!.dateAnalysis,
      imgUrl: doc.data()!.imgUrl,
      imgRoiUrl: doc.data()!.imgRoiUrl,
      testResult: doc.data()!.testResult,
      precision: doc.data()!.precision,
      accuracy: doc.data()!.accuracy,
      recall: doc.data()!.recall,
      f1: doc.data()!.f1,
    });
  });
  return resultsList;
}
