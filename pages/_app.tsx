import "../styles/globals.css";
import "../styles/main.scss";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <ul className="header">
          <li>
            <Link href="/">
              <a>Index</a>
            </Link>
          </li>
          <li>
            <Link href="/colors">
              <a>Colors</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/vehicle">
              <a>Vehicle</a>
            </Link>
          </li>
        </ul>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
