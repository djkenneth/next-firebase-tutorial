import { NextPage } from "next";
import { useRef, useState } from "react";
import { signup, login, useAuth, logout } from "../firebase/initFirebase";

const Login: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const currentUser = useAuth() || null;

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(emailRef?.current.value, passwordRef?.current.value);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(emailRef?.current.value, passwordRef?.current.value);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: "30px", marginLeft: "30px", fontSize: "50px" }}>
      <h5>Currently logged in as: {currentUser?.email}</h5>
      <form onSubmit={handleSignUp}>
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <button disabled={loading || currentUser} type="submit">
          Sign Up
        </button>
        <button disabled={loading || !currentUser} onClick={handleLogout}>
          Log out
        </button>
        <button disabled={loading || currentUser} onClick={handleLogin}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
