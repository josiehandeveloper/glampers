import React, { Component } from "react";
import { Button, IconButton } from "@material-ui/core";
import TokenService from "../../../services/token-service";
import AuthAPIService from "../../../services/auth-api-service";
import Context from "../../../Context";
import "./Register.css";

class Register extends Component {
  static contextType = Context;
  state = {
    error: null,
  };

  handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = {
      email: email.value,
      password: password.value,
    };
    AuthAPIService.postUser(user)
      .then((user) => {
        this.props.history.push("/login");
      })
      .catch((error) => console.error(error));
  };
  render() {
    return (
      <div className="register">
        <div className="register__container">
          <h1>Register</h1>
          <form>
            <h5>E-mail </h5>
            <input
              type="text"
              className="emailInput"
              name="email"
              required=""
            />

            <h5>Password</h5>
            <input
              type="password"
              className="passwordInput"
              name="password"
              required=""
            />
            <Button type="submit" className="register__btn">
              Create an Account
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
