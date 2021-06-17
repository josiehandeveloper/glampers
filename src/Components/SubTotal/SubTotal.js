import React from "react";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";
import "./SubTotal.css";

function SubTotal({ price }) {
  return (
    <div className="subtotal">
      <div className="subtotal__container">
        <strong>Total: {price}</strong>
        <Button variant="outlined">Checkout</Button>
      </div>
    </div>
  );
}

export default SubTotal;
