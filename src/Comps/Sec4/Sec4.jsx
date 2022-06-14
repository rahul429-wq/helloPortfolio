import React from "react";
import MyLine from "../MyLine";
import "./Sec4.css";
const Sec4 = () => {
  return (
    <div id="sec-4">
      <MyLine />
      <h2>About Me</h2>
      <p>
        The purpose of Mine is to take My development skills to the next level
        and build awesome apps.
      </p>
      <p style={{ marginBottom: "70px" }}>{/* <q>Dont think too much</q> */}</p>
      <div className="div1">
        <a href="mailto:bhavikprajapati4244@gmail.com">Mail me</a>
      </div>
    </div>
  );
};

export default Sec4;
