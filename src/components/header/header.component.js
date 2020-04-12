import React from "react";
import "./header.style.scss";
export default function Header() {
  return (
    <nav className="r-header navbar fixed-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="special-character">{`</`}</span> Ramachandran G
        </a>
        <div
          className="collapse navbar-collapse nav-container"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              About
            </a>
            <a className="nav-item nav-link" href="#">
              Experience
            </a>
            <a className="nav-item nav-link button-link" href="#">
              Projects <span className="special-character">{`/>`}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
