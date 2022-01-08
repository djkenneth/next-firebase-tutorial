import UseAuth from "../lib/authProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function AuthGuard({ children }) {
  const { currentUser, initializing } = UseAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      //auth is initialized and there is no user
      if (!currentUser) {
        router.push("/login");
      }
    }
  }, [currentUser, initializing, router]);

  // if auth initialized with a valid user show protected page
  if (!initializing && currentUser) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
}
