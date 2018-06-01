import React from "react";
import "./card.css";

const Card = props => {
  const { children, title, body } = props;
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="body">{body}</p>
      { children }
    </div>
  );
};

export default Card;
