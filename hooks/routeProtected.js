import { useRouter as UseRouter } from "next/router";
import { useEffect, useState } from "react";

const routeProtected = (Component) => {
  return function RouteProtected(props) {
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

export default routeProtected;
