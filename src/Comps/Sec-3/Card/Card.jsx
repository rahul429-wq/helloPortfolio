import React from "react";
import "./Card.css";

const Card = ({ langs }) => {
  return (
    <div>
      <a href="#">
        <i className={langs.logo}></i>
      </a>
      <h3>{langs.title}</h3>
      <p>Experience with</p>
      <p>{langs.langname}</p>
    </div>
  );
};

export default Card;
