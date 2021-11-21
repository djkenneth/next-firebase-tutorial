import { NextPage } from "next";
import { useState } from "react";
import { signup, login, useAuth, logout } from "../firebase/initFirebase";

const Login: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  console.log(useAuth());
  const currentUser = useAuth() || null;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(email, password);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(email, password);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
