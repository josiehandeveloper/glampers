import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <h5>E-mail </h5>
          <input type="text" className="emailInput" />
          <h5>Password</h5>
          <input type="password" className="passwordInput" />
          <Button className="login__btn">Login</Button>
        </form>
        <Link to="/register" className="registerLink">
          Don't have an account yet?
        </Link>
      </div>
    </div>
  );
}

export default Login;
