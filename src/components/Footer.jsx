import React from "react";

import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-main">
      <p className="footer-main-text">&copy; 2024 Portfolio</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link className="nav-link-footer" to="/">
            Home
          </Link>
        </li>

        <li className="list-inline-item">
          <Link className="nav-link-footer" to="projects">
            Projects
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="nav-link-footer" to="skills">
            Skills
          </Link>
        </li>
        <li className="list-inline-item">
          <Link className="nav-link-footer" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
