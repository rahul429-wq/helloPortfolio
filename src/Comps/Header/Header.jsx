import React from "react";
import "./Header.css";
import { profile } from "../Constant";

const Header = () => {
  return (
    <header className="header">
      <a className="brand" href="#home">
        <span className="brand-mark">
          <span className="brand-ring" aria-hidden="true" />
          <img src="/images/Dp.jpeg" alt={profile.name} />
        </span>
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </div>
      </a>

      <nav className="nav-links" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        <a className="text-link" href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="header-cta" href={profile.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
