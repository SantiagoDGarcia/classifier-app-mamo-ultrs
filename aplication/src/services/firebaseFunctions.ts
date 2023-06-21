import { auth, db } from "../services/firebase";
import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { Alert } from "react-native";
import AppContext from "../../hooks/createContext";
import {
  AuthErrorCodes,
  beforeAuthStateChanged,
  createUserWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import firestore, { collection, addDoc, setDoc, doc } from "firebase/firestore";
export function logOut() {
  signOut(auth)
    .then(() => {
      console.log("User logout | ");
    })
    .catch((error) => {
      console.error("ERROR LOGOUT ", error);
    });
}

export async function loginUser(
  email: string,
  password: string
): Promise<void> {
  // const {
  //   isLoading: [, setLoading],
  // } = useContext(AppContext)!;
  //setLoading(true);

  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then((user: any) => {
        //console.log("Sucessfull login ", user.email);
      })
      .catch((error: any) => {
        if (
          error.code == "auth/wrong-password" ||
          error.code == "auth/user-not-found"
        ) {
          Alert.alert(
            "El usuario o contraseña proporcionados no son correctos, verifique los campos."
          );
        }
      });
  } catch (error: any) {
    console.log(error.code);
    Alert.alert("Hubo un error al conectarse al servicio.");
  }
}

export function registerUserAuth(
  email: string,
  password: string,
  name: string,
  organization: string
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      registerUserFirestore(user, email, name, organization)
        .then((user) => {
          console.log("Usuario registrado");
          //return Promise.resolve();
        })
        .catch((error) => {
          console.log("Error FIREE", error);
          Alert.alert("Error FIREE");
          throw error;
          //auth.signOut();
          //auth.currentUser?.delete;
          // auth.currentUser?.reload;
          //async auth.updateCurrentUser(user?,);
          //return Promise.reject(error);
        });
    })
    .catch((error) => {
      console.log("Error AUTTTT", error);
      Alert.alert("Error AUTTTT");

      // return Promise.reject(error);
      throw error;
    });
}

async function registerUserFirestore(
  user: any,
  email: string,
  name: string,
  organization: string
): Promise<void> {
  console.log(user.user.uid);
  var userData = {
    userId: user.user.uid,
    name: name,
    email: email,
    organization: organization,
  };

  const userRef = collection(db, "Users");
  await setDoc(doc(userRef), userData);
}
