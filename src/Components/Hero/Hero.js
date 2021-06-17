import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const history = useHistory();

  return (
    <div className="hero__container">
      <div className="hero__info">
        <h1>Get out and explore</h1>
        <h4>Plan a getaway different from the rest</h4>
        <Button
          onClick={() => history.push("/search")}
          variant="outlined"
          className="adventure__btn"
        >
          Adventure Awaits
        </Button>
      </div>
    </div>
  );
}

export default Hero;
