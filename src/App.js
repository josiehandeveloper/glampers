import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
