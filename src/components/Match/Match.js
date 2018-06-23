import React from "react";
import "./Match.css";

const Match = props => (
    <button onClick={() => props.checkCard(props.id)} className="btn" type="button">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    </button>

);

export default Match;
