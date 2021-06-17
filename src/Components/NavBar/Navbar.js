import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TokenService from "../../services/token-service";
import Context from "../../Context";
import "../NavBar/Navbar.css";

class Navbar extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <img className="navbar__icon" src={logo} alt="logo" />
        </Link>

        <div className="nav__menu">
          <IconButton component={Link} to="/login">
            <AccountCircleIcon />
          </IconButton>
          <IconButton aria-label="cart" component={Link} to="/checkout">
            <Badge badgeContent={this.context.cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Navbar;
