import { useRouter as UseRouter } from "next/router";
import { useEffect, useState } from "react";

export const withPublic = (Component) => {
  return function WithPublic(props) {
    const [token, setToken] = useState(null);
    const router = UseRouter();

    useEffect(() => {
      const accessToken = JSON.parse(sessionStorage.getItem("token"));
      setToken(accessToken);
    }, []);

    if (token && token !== null) {
      router.push("/profile");
      return null;
    }
    return <Component {...props} />;
  };
};

// export const withProtected = (Component) => {
//   return function WithProtected(props) {
//     const [token, setToken] = useState(null);
//     const router = UseRouter();

//     useEffect(() => {
//       const accessToken = JSON.parse(sessionStorage.getItem("token"));
//       setToken(accessToken);
//     }, []);

//     if (!token && token == null) {
//       router.push("/login");
//       return null;
//     }
//     return <Component {...props} />;
//   };
// };
