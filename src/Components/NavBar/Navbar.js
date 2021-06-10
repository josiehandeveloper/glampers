import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../../images/logo.png";
import "../NavBar/Navbar.css";
import { IconButton } from "@material-ui/core";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img className="navbar__icon" src={logo} alt="logo" />
      </Link>
      <ul className="nav__menu">
        <IconButton aria-label="profile" component={Link} to="/login">
          <AccountCircleIcon />
        </IconButton>
        <IconButton aria-label="cart" component={Link} to="/checkout">
          <ShoppingCartIcon />
        </IconButton>
      </ul>
    </nav>
  );
}

export default Navbar;
