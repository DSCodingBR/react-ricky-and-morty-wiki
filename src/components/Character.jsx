import React from "react";

function Character(props) {
  return (
    <div className="character-list-info-wrapper">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Character;
