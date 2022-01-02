import { useRouter as UseRouter } from "next/router";
import { useEffect, useState } from "react";

const withPublic = (Component) => {
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
    } else if (!token) {
      console.log(typeof token);
      console.log("nag wowork sa part na ito");
      //   router.push("/");
      return null;
    }
    return <Component {...props} />;
  };
};

export default withPublic;
