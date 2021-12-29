import "../styles/globals.css";
import "../styles/main.scss";
import Router from "next/router";
import AuthContextProvider from "../lib/authProvider";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Components
import Header from "../components/Header";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.pink,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={customTheme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
