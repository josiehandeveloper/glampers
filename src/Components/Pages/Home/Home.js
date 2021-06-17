import React, { Component } from "react";
import Hero from "../../Hero/Hero";
import Card from "../../Card/Card";
import "./Home.css";
import Context from "../../../Context";

class Home extends Component {
  static contextType = Context;

  render() {
    const { glampers = [] } = this.context;
    return (
      <div className="home">
        <Hero />
        <div className="cards__container">
          {glampers.slice(0, 3).map((glamper) => (
            <Card key={glamper.id} {...glamper} />
          ))}
        </div>
        <div className="cards__container">
          {glampers.slice(3, 6).map((glamper) => (
            <Card key={glamper.id} {...glamper} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
