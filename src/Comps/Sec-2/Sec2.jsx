import React from "react";
import Card from "./Cards/Card";
import "./Sec2.css";
import { projects } from "../Constant";
import MyLine from "../MyLine";

const Sec2 = () => {
  return (
    <div id="sec-2">
      <MyLine />
      <h2>Projects</h2>
      <div className="card-container">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Sec2;
