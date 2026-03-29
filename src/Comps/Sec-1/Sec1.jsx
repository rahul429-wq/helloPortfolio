import React from "react";
import "./Sec1.css";
import { highlights, profile } from "../Constant";

const Sec1 = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Full Stack Engineer</p>
        <h1>
          Building thoughtful products with modern frontend, strong backend
          systems, and production-ready execution.
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a className="primary-btn" href="#work">
            View work
          </a>
          <a
            className="secondary-btn"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <div className="hero-meta">
          <span>{profile.location}</span>
          <span>{profile.availability}</span>
        </div>
      </div>

      <aside className="hero-panel">
        <div className="hero-portrait-card">
          <div className="hero-portrait-frame">
            <img src="/images/Dp.jpeg" alt={profile.name} />
          </div>
          <div className="hero-portrait-copy">
            <p className="card-label">Developer behind the work</p>
            <h2>{profile.name}</h2>
            <p>
              Full stack engineer focused on product quality, scalable systems,
              and interfaces that feel polished in real use.
            </p>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-label">Now</p>
          <h2>Software Engineer at Konze India Pvt Ltd</h2>
          <p>
            Shipping enterprise products across CRM, e-signature, AI automation,
            and ML-driven review intelligence.
          </p>
        </div>

        <div className="hero-grid">
          {highlights.map((item) => (
            <article key={item.label} className="metric-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Sec1;
