import React from "react";
import MyLine from "../MyLine";
import "./Animations.css";
import { anims } from "../Constant";
const Animations = () => {
  return (
    <div id="animation">
      <MyLine />
      <h2>Work</h2>
      <br />
      <div className="card-list">
        {anims.map((anims) => (
          <a href={anims.link} className="card" id={anims.id} target="_blank">
            <div
              className="grid-card"
              style={{
                backgroundImage: `url(${anims.image})`,
              }}
            >
              {/* <iframe
                src={anims.link}
                title="W3Schools Free Online Web Tutorials"
              ></iframe> */}
            </div>
          </a>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Animations;
