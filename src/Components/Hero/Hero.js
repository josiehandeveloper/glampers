import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Calendar from "../Calendar/Calendar";
import "./Hero.css";

function Hero() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="hero__container">
      <div className="hero__calendar">
        {showSearch && <Calendar />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="btn__dates"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="hero__info">
        <h1>Get out and explore</h1>
        <h4>Plan a getaway different from the rest</h4>
        <Button variant="outlined">Adventure Awaits</Button>
      </div>
    </div>
  );
}

export default Hero;
