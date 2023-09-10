//import database from 'firebase/database';
import {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_MEASUREMENTID,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
} from "@env";
import {
  DocumentSnapshot,
  getDocs,
  getFirestore,
  orderBy,
  query,
  QuerySnapshot,
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  getAuth,
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useContext, useEffect } from "react";
import AppContext from "../hooks/CreateContext";
import { useNavigation } from "@react-navigation/native";
import { showAlert, getCreationTime, showError } from "../helpers";
import { t } from "i18next";

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENTID,
};

const timeoutResponse = 6 * 60 * 1000;
export const fireb = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(fireb);

export function logOut(): void {
  signOut(auth).catch((error) => {
    showError(error.code, t);
  });
}

export function observerAuth(): void {
  const {
    userData: [, setUser],
  } = useContext(AppContext)!;
  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, async function (user) {
      if (user) {
        const x = auth.currentUser!.uid;
        const userRef = doc(db, "Users", x);
        const userDoc = await getDoc(userRef);
        const userFirestore: any = userDoc.data();
        setUser({
          name: userFirestore.name,
          email: user.email,
          createdAt: getCreationTime(user.metadata.creationTime!),
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

export function sendEmailOnReset({
  email,
  doAfterRequest,
}: FirebaseSendResetEmailProps): void {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      showAlert(
        `${t("alert:emailSent")}`,
        `${t("alert:sendingResetPasswordEmail")}`
      );
      doAfterRequest();
    })
    .catch((error) => {
      showError(error.code, t);
    });
}

export async function loginUser({
  email,
  password,
}: FirebaseLoginProps): Promise<void> {
  await signInWithEmailAndPassword(auth, email, password).catch((error) => {
    showError(error.code, t);
  });
}

export function registerUserAuth({
  email,
  password,
  name,
  organization,
}: FirebaseRegisterAuthProps): void {
  async function registerUserFirestore({
    user,
    email,
    name,
    organization,
  }: FirebaseRegisterFirestoreProps): Promise<void> {
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
      registerUserFirestore({ user, email, name, organization }).catch(
        (error) => {
          showError(error.code, t);
          throw error;
        }
      );
    })
    .catch((error) => {
      showError(error.code, t);
      throw error;
    });
}

export async function changeUserPassword({
  oldPassword,
  newPassword,
}: FirebaseChangePasswordProps): Promise<void> {
  const user = auth.currentUser!;
  const credential = EmailAuthProvider.credential(user.email!, oldPassword);
  await reauthenticateWithCredential(user, credential)
    .then(() => {
      updatePassword(user, newPassword)
        .then(() => {
          showAlert(
            `${t("alert:passwordUpdated")}`,
            `${t("alert:changePasswordOk")}`
          );
        })
        .catch((error) => {
          showError(error.code, t);
        });
    })
    .catch((error) => {
      showError(error.code, t);
    });
}

export async function getResultData({
  idResult,
}: FirebaseGetResultProps): Promise<any> {
  const userId = auth.currentUser!.uid;
  const docRef = doc(db, "Users", userId, "HistResults", idResult);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), timeoutResponse)
  );
  const docSnapPromise = getDoc(docRef);
  const result = await Promise.race([docSnapPromise, timeoutPromise]);
  return result;
}

export async function getAllHistData(): Promise<any[]> {
  const userId = auth.currentUser?.uid!;
  const resultsList: any[] = [];
  const getHistPromise = getDocs(
    query(
      collection(db, "Users", userId, "HistResults"),
      where("isActive", "==", true),
      orderBy("dateAnalysis", "desc")
    )
  );
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), timeoutResponse)
  );
  const getHist = (await Promise.race([
    getHistPromise,
    timeoutPromise,
  ])) as QuerySnapshot;
  getHist.docs.forEach((doc: DocumentSnapshot) => {
    resultsList.push({
      idResult: doc.id,
      url: doc.data()!.url,
      typeAnalysis: doc.data()!.typeAnalysis,
      dateAnalysis: doc.data()!.dateAnalysis,
      durationAnalysis: doc.data()!.durationAnalysis,
      imgUrl: doc.data()!.imgUrl,
      testResult: doc.data()!.testResult,
      roiExtracted: doc.data()!.roiExtracted,
    });
  });
  return resultsList;
}

export async function hideResultData({
  idResult,
}: FirebaseHideResultProps): Promise<void> {
  const userId = auth.currentUser!.uid;

  const docRef = doc(db, "Users", userId, "HistResults", idResult);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), timeoutResponse)
  );
  const updateDocPromise = updateDoc(docRef, { isActive: false });
  await Promise.race([updateDocPromise, timeoutPromise]);
}
