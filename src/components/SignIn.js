/** @format */

import React, {useState} from "react";
import {Button, Input} from "@material-ui/core";
import {Link} from "react-router-dom";
import {auth} from "./firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    // history.push("/");
    setEmail("");
    setPassword("");
    e.preventDefault();
  };
  return (
    <div className="flex">
      <center className="ui huge header white">SIGN IN</center>
      <div className="formWrap">
        <form className="form">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="margin"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="margin"
          />
          <Button
            type="submit"
            className="ui button primary margin"
            onClick={logIn}
          >
            Sign In
          </Button>
        </form>
        <p>
          Not registered? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
