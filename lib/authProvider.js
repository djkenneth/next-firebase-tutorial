import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/initFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (sessionStorage.getItem("token") == null) {
        sessionStorage.setItem("token", JSON.stringify(null));
        console.log("walang token");
      } else {
        setCurrentUser(user);
        const token = user?.accessToken;
        sessionStorage.setItem("token", JSON.stringify(token));
        console.log("merong token");
      }

      // if (!user) {
      //   sessionStorage.setItem("token", null);
      //   console.log("walang token");
      // } else {
      //   setCurrentUser(user);
      //   const token = user.accessToken;
      //   sessionStorage.setItem("token", JSON.stringify(token));
      //   console.log("merong token");
      // }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth).then(() => {
      sessionStorage.setItem("token", null);
    });
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
  };
  return <AuthContext.Provider value={value} {...props} />;
}

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
