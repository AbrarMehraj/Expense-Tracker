/** @format */

import React, {useState} from "react";
import {Button, Input} from "@material-ui/core";
import {Link} from "react-router-dom";
import {auth} from "./firebase";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const signUp = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => alert("successful"))
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
    e.preventDefault();
  };
  return (
    <div className="flex">
      <center className="ui huge header white">SIGN UP</center>
      <div className="formWrap">
        <form className="form">
          <Input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="margin"
          />
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
            onClick={signUp}
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

export default SignUp;
