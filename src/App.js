import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import SearchPage from "./Components/Pages/SearchPage/SearchPage";
import SearchResult from "./Components/SearchResult/SearchResult";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import config from "./config";
import "./App.css";
import TokenService from "./services/token-service";

class App extends Component {
  state = {
    cart: [],
    glampers: [],
    error: null,

    setGlampers: (glampers) => {
      this.setState({
        glampers,
        error: null,
      });
    },

    /* Add Item to Cart */
    addItem: (item) => {
      fetch(`${config.API_ENDPOINT}/api/checkout`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${config.API_KEY}`,
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((newItem) => {
          this.setState({ cart: [newItem] });
          console.log({ cart: [newItem] });
        })
        .catch((e) => console.log(e));
    },

    /* Delete Item in Cart */
    deleteItem: (itemId) => {
      fetch(`${config.API_ENDPOINT}/api/checkout`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${config.API_KEY}`,
        },
        body: JSON.stringify({ item_id: itemId }),
      }).then(() => {
        this.setState({
          cart: this.state.cart.filter((i) => i.id !== itemId),
        });
      });
    },

    /* Cart */
    // getUserCart: () => {
    // //   fetch(`${config.API_ENDPOINT}/api/checkout`, {
    // //     method: "GET",
    // //     headers: {
    // //       Authorization: `Bearer ${config.API_KEY}`,
    // //       "Content-Type": "application/json",
    // //     },
    // //   })
    // //     .then((res) => res.json())
    // //     .then((cart) => {
    // //       this.setState({ cart });
    // //     })
    // //     .catch((error) => {
    // //       console.error(error);
    // //     });
    // // },

    getGlampers: () => {
      fetch(`${config.API_ENDPOINT}/api/glampers`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((glampers) => {
          this.setState({ glampers });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };
  componentDidMount() {
    this.state.getGlampers();
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={SearchPage} />
          <Route path="/search" component={SearchResult} />
          <Route path="/checkout" component={Checkout} />
          <Footer />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
