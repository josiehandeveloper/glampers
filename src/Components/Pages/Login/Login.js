import React, { Component } from "react";
import { Button, IconButton } from "@material-ui/core";
import TokenService from "../../../services/token-service";
import AuthAPIService from "../../../services/auth-api-service";
import Context from "../../../Context";
import "./Login.css";

class Login extends Component {
  static contextType = Context;
  state = {
    error: null,
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    const user = { email: email.value, password: password.value };
    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("/search");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="login">
        <div className="login__container">
          <h1>Login</h1>
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

            <Button className="login__btn" type="submit">
              Login
            </Button>
            <Button
              type="submit"
              className="register__link"
              onClick={() => this.props.history.push("/register")}
            >
              Don't have an account?
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
