import React from "react";
import "./Card.css";
const Card = ({ project }) => {
  return (
    <div className="card">
      <img alt={project.alt} src={project.image} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div style={{ textAlign: "center" }}>
        <a id="link" target="_blank" href={project.source}>
          Link
        </a>
      </div>
    </div>
  );
};

export default Card;
