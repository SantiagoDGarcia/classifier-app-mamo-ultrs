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
} from "firebase/firestore";
//import database from 'firebase/database';
import {
  getAuth,
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import { useContext, useEffect } from "react";
import AppContext from "../hooks/createContext";
import { useNavigation } from "@react-navigation/native";
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

const timeout = 6;
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
  signOut(auth).catch((error) => {
    showAlert(`${t("alert:errorGeneric")}`);
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

export function sendEmailPasswordCode(
  email: string,
  code: string,
  newPassword: string
): void {
  verifyPasswordResetCode(auth, email)
    .then((email) => {
      // El código es válido y el correo electrónico del usuario se ha recuperado
      return confirmPasswordReset(auth, code, newPassword);
    })
    .then(() => {
      // La contraseña se ha restablecido correctamente
    })
    .catch((error) => {
      // Error al restablecer la contraseña
    });
}

export function sendEmailOnReset(email: string): void {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      showAlert(`${t("alert:sendingResetPasswordEmail")}`);
    })
    .catch((error) => {
      showAlert(`${t("alert:errorGeneric")}`);
    });
}

/*
export function sendEmailOnReset(email: string): void {
  const auth = getAuth();
  const actionCodeSettings = {
    // URL a la que se redirigirá al usuario después de completar la acción
    url: "https://mamaclasificator.firebaseapp.com/__/auth/action?mode=resetPassword&oobCode=hfqoJr6b3I3z3bEd4q6aULGZJFx0SEWGNwXcYJCjVNYAAAGI81KgAg&apiKey=AIzaSyBz08ps3YnMp4Z71UadBXqkCca6rmhu0Ao&lang=en",
    // Esta debe ser verdadera
    handleCodeInApp: true,
    // Tu paquete de Android
    android: {
      packageName: "com.utpl.mamacheck",
      installApp: true,
      minimumVersion: "6",
    },
    // Tu identificador de paquete iOS
    iOS: {
      bundleId: "com.example.ios",
    },
    // El dominio del enlace dinámico utilizado para la aplicación móvil
    dynamicLinkDomain: "http://www.google.com",
  };

  sendPasswordResetEmail(auth, email, actionCodeSettings)
    .then(() => {
      showAlert(`${t("alert:sendingResetPasswordEmail")}`);
    })
    .catch((error) => {
      console.error(error);
    });
}
*/
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
      registerUserFirestore(user, email, name, organization).catch((error) => {
        showAlert(`${t("alert:errorGeneric")}`);
        throw error;
      });
    })
    .catch((error) => {
      showAlert(`${t("alert:errorGeneric")}`);
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
          showAlert(`${t("alert:errorGeneric")}`);
        });
    })
    .catch((error) => {
      if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        showAlert(`${t("alert:errorChangePassword")}`);
      } else {
        showAlert(`${t("alert:errorGeneric")}`);
        console.log(error);
      }
    });
}

export async function getResultData(idResult: string): Promise<any> {
  const userId = auth.currentUser!.uid;
  const docRef = doc(db, "Users", userId, "HistResults", idResult);

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error("Operation timed out")),
      timeout * 60 * 1000
    )
  );
  const docSnapPromise = getDoc(docRef);

  const result = await Promise.race([docSnapPromise, timeoutPromise]);
  return result;
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
    setTimeout(
      () => reject(new Error("Operation timed out")),
      timeout * 60 * 1000
    )
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
      durationAnalysis: doc.data()!.durationAnalysis,
      imgUrl: doc.data()!.imgUrl,
      testResult: doc.data()!.testResult,
      roiExtracted: doc.data()!.roiExtracted,
    });
  });
  return resultsList;
}
