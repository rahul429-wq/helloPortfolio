import React from "react";
import "./Header.css";
 
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <h1>Bhavik</h1>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#sec-2">Projects</a>
        </li>
        <li>
          <a href="#sec-3"> Technologies</a>
        </li>
        <li>
          <a href="#sec-4">About</a>
        </li>
      </ul>
      <ul className="social">
        <li>
          <a target="_blank" href="https://github.com/rahul429-wq">
            {/* <i className="fa fa-github"></i> */}
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Bhavik-prajapati">
            {/* <i className="fa fa-github"></i> */}
            {/* <i className="fa-brands fa-github"></i> */}
            <i class="fa-brands fa-github-alt"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/rahul_420_/?hl=en">
            {/* <i className="fa fa-instagram"></i> */}
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bhavik-prajapati-67b458163/"
          >
            {/* <i className="fa fa-linkedin"></i> */}
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/channel/UCiP_JoAO2aNwFXVX-nrTc-w">
            {/* <i className="fa fa-linkedin"></i> */}
            {/* <i className="fa-brands fa-linkedin"></i> */}
            
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
