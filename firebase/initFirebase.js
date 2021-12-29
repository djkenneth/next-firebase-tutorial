import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth();

// export const signup = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((user) => {
//       console.log(user);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// export const login = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((user) => {
//       console.log(user);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const logout = () => {
//   return signOut(auth);
// };

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        setCurrentUser(userAuth);
      } else {
        setCurrentUser(null);
      }
    });
    return unsub;
  }, []);

  return currentUser;
}
