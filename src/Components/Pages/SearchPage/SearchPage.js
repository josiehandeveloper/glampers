import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./SearchPage.css";

class SearchFilter extends Component {
  render() {
    return (
      <div className="searchPage">
        <div className="searchPage__filters">
          <p>10 stays - 26 June to 30 June - 2 guests</p>
          <h1> Our Unique Stays</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Location</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms</Button>
          <Button variant="outlined">More Filters</Button>
        </div>
      </div>
    );
  }
}

export default SearchFilter;
