import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Context from "../../Context";
import "./SearchResult.css";
import TokenService from "../../services/token-service";

class SearchResult extends Component {
  static contextType = Context;
  render() {
    const { glampers = [] } = this.context;
    return (
      <>
        {glampers.map((glamper) => (
          <div>
            <div className="searchResult" key={glamper.id}>
              <img className="searchResult__img" src={glamper.src} alt="" />
              <div className="searchResult__info">
                <div className="searchResult__infoTop">
                  <h2 className="searchResult__title">{glamper.title}</h2>
                  <p>{glamper.description}</p>
                </div>
                <div className="searchResult__infoBottom">
                  <h2>{glamper.price}</h2>

                  {this.context.cart.length === 1 ? (
                    <IconButton className="addToCartIcon">
                      <AddShoppingCart />
                    </IconButton>
                  ) : (
                    <IconButton
                      className="addToCartIcon"
                      onClick={() => this.context.addItem(glamper)}
                    >
                      <AddShoppingCart />
                    </IconButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default SearchResult;
