import React from "react";
import "./Sec3.css";
import { experience, skillGroups } from "../Constant";

const Sec3 = () => {
  return (
    <section id="skills" className="content-section skills-section">
      <div className="section-heading">
        <p>Capabilities</p>
        <h2>A practical stack shaped by real product delivery.</h2>
      </div>

      <div className="skills-layout">
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div id="experience" className="timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="timeline-card">
              <div className="timeline-head">
                <div>
                  <p className="timeline-role">{item.role}</p>
                  <h3>{item.company}</h3>
                </div>
                <span>{item.period}</span>
              </div>
              <p className="timeline-location">{item.location}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec3;
