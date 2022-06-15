import React, { useState } from "react";
import "./Theme.css";

const Theme = () => {
  const [theme, settheme] = useState("0f1624");

  const themechange = () => {
    console.log("object");
    if (theme === "black") {
      settheme("#0f1624");
      document.body.style.background = theme;
    } else {
      settheme("black");
      document.body.style.background = theme;
    }

    //   settheme("white");
  };
  return (
    <div>
      <button id="theme" onClick={themechange}>
        💡
      </button>
    </div>
  );
};

export default Theme;
