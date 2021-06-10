import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../../images/logo.png";
import "../NavBar/Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <img className="navbar__icon" src={logo} alt="logo" />
      <ul className="nav__menu">
        <li className="nav__links">
          <AccountCircleIcon />
        </li>
        <li className="nav__links">
          <ShoppingCartIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
