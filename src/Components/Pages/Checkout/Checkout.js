import React, { Component } from "react";
import SubTotal from "../../SubTotal/SubTotal";
import { IconButton, Button } from "@material-ui/core";
import Context from "../../../Context";
import "./Checkout.css";

class Checkout extends Component {
  static contextType = Context;

  render() {
    const { cart = [] } = this.context;

    return (
      <div className="checkout">
        <div className="checkout__left">
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <div className="checkoutProduct" key={item.id}>
              <img className="checkoutProduct__img" src={item.src} alt="" />
              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                  <strong>{item.price}</strong>
                </p>

                <Button
                  variant="outlined"
                  className="remove__btn"
                  onClick={() => this.context.deleteItem(item.id)}
                >
                  Remove
                </Button>
              </div>
              <div className="checkout__right">
                <SubTotal price={item.price} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Checkout;

// {
//   cart.map((item) => (
//     <CheckoutProducts
//       id={item.id}
//       title={item.title}
//       image={item.src}
//       price={item.price}
//     />
//   ));
// }
