import React from "react";
import { Button } from "@material-ui/core";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <h1>Register</h1>
        <form>
          <h5>E-mail </h5>
          <input type="text" className="emailInput" />
          <h5>Password</h5>
          <input type="password" className="passwordInput" />
          <h5>Confirm Password</h5>
          <input type="password" className="confirmInput" />
          <Button className="register__btn">Register</Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
