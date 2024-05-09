"use client";

import { handleLogin } from "@/lib/action";
import Styles from "./CredentialsLogin.module.css";

import { useFormState } from "react-dom";
import Link from "next/link";

const CredentialsLogin = () => {
  // useFormState hook is used to display error message from the server in the frontend
  const [state, formAction] = useFormState(handleLogin, undefined);

  return (
    <div className={Styles.container}>
      <h2>Or sign in with user credentials</h2>
      <form action={formAction}>
        <input type="text" placeholder="Enter a username" name="Username" />
        <input
          type="password"
          placeholder="Enter your password"
          name="Password"
        />
        <button>Login</button>
        {state?.error}
        <Link style={{ color: "blue" }} href={"/register"}>
          Don't have an account? Sign up
        </Link>
      </form>
    </div>
  );
};

export default CredentialsLogin;
