import React from "react";
import "./Sec4.css";
import { certifications, education, profile } from "../Constant";

const links = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "LeetCode", href: profile.links.leetcode },
  { label: "YouTube", href: profile.links.youtube },
];

const Sec4 = () => {
  return (
    <section id="contact" className="content-section closing-section">
      <div className="section-heading">
        <p>Beyond the code</p>
        <h2>Education, certifications, and direct ways to reach me.</h2>
      </div>

      <div className="closing-layout">
        <div className="info-card">
          <h3>Education</h3>
          {education.map((item) => (
            <article key={item.school} className="stacked-item">
              <strong>{item.school}</strong>
              <span>{item.degree}</span>
              <small>
                {item.period} | {item.location}
              </small>
            </article>
          ))}
        </div>

        <div className="info-card">
          <h3>Certifications & involvement</h3>
          <ul className="clean-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-card contact-card">
          <h3>Let&apos;s connect</h3>
          <p>
            I enjoy building products that balance clean interfaces, solid
            engineering, and meaningful business impact.
          </p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            View latest resume
          </a>

          <div className="contact-links">
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
