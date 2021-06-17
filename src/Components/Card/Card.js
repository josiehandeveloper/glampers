import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <div className="card__info">
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <div className="card__infoBottom">
          <h3 className="addCart">{props.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
