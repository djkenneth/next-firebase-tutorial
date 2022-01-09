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
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";

const AuthContext = createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (!user && JSON.parse(sessionStorage.getItem("token")) === null) {
        sessionStorage.setItem("token", null);
      } else {
        setCurrentUser(user);
        const token = user?.accessToken;
        sessionStorage.setItem("token", JSON.stringify(token));
      }
      setInitializing(false);
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

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  };

  const resetPassword = (oobCode, newPassword) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const value = {
    currentUser,
    initializing,
    login,
    register,
    logout,
    signInWithGoogle,
    forgotPassword,
    resetPassword,
  };
  return <AuthContext.Provider value={value} {...props} />;
}
