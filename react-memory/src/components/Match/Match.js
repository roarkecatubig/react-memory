import React from "react";
import "./Match.css";

const Match = props => (
  // <div className="card">
    <button onClick={() => props.checkCard(props.id)} className="btn" type="button">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    </button>
    /* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */
  // </div>
);

export default Match;
