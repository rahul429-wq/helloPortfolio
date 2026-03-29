import React from "react";
import "./Sec2.css";
import { featuredProjects } from "../Constant";

const Sec2 = () => {
  return (
    <section id="work" className="content-section">
      <div className="section-heading">
        <p>Selected Work</p>
        <h2>Projects and product work that reflect how I build.</h2>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-top">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
            </div>

            <p className="project-summary">{project.summary}</p>
            <p className="project-impact">{project.impact}</p>

            <div className="tag-row">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                Open project
              </a>
            ) : (
              <span className="project-note">Built for enterprise teams</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Sec2;
