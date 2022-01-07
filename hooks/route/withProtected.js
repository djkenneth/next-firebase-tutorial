import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withProtected = (Component) => {
  return function WithProtected(props) {
    const [token, setToken] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const accessToken = JSON.parse(sessionStorage.getItem("token"));
      setToken(accessToken);
    }, []);

    console.log(token);

    if (token == null) {
      router.push("/login");
      return null;
    }
    return <Component {...props} />;
  };
};

export default withProtected;
