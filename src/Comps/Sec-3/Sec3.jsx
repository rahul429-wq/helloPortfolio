import React from "react";
import Card from "./Card/Card";
import "./Sec3.css";
import { Langs } from "../Constant";
import MyLine from "../MyLine";
const Sec3 = () => {
  return (
    <div id="sec-3">
      <MyLine />
      <h2>Technologies</h2>
      <p style={{ marginBottom: "70px" }}>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </p>

      <div className="card-container">
        {Langs.map((langs) => (
          <Card key={langs.id} langs={langs} />
        ))}
      </div>
    </div>
  );
};

export default Sec3;
