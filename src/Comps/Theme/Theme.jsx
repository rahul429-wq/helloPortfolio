import React, { useState, useEffect } from "react";
import "./Theme.css";

const Theme = () => {
  const [theme, settheme] = useState("#0f1624");
  useEffect(() => {
    settheme("#0f1624");
    console.log(theme);
    document.body.style.background = theme;
  }, []);

  const themechange = () => {
    console.log(theme);
    if (theme === "#0f1624") {
      settheme("black");
      document.body.style.background = "black";
    }
    if (theme === "black") {
      settheme("#0f1624");
      document.body.style.background = "#0f1624";
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
