import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="hero-main">
        <div className="container">
          <div className="d-flex flex-column gap-3 flex-sm-row justify-content-center align-items-center">
            <div className="col-7 ps-0">
              <div className="hero-content d-flex flex-column gap-3">
                <h1 className="hero-name-text">
                  Hello, I'm <span className="name">Ashwin</span>
                </h1>
                <h3>Frontend Developer</h3>
                <p className="hero-about-text">
                  Passionate about React JS, I build responsive applications
                  that prioritize user experience and design. I focus on
                  delivering clean code and intuitive, accessible interfaces.
                </p>

                <div className="view-projects-btn-container">
                  <Link
                    className="btn btn-success view-projects-btn"
                    to="/projects"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-5 d-flex justify-content-center">
              <div className="hero-image">
                <img
                  className="img-fluid rounded-3"
                  src="/images/portfolio-img.png"
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}

      <Projects />

      {/* Skills section */}
      <Skills />

      {/* Contacts section */}

      <Contact />
    </>
  );
};

export default Home;
