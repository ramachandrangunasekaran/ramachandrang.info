import React from "react";
import "./style.scss";
import { greetVisitor } from "./../../../../utils/greetings";
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 intro">
            <p className="salutations">
              Hello{" "}
              <span role="img" aria-label="hi">
                👋
              </span>
              , {greetVisitor()}. My name is
            </p>
            <h1 className="name">Ramachandran Gunasekaran.</h1>
            <h2 className="tag-line">
              Optimistic & Enthusiastic Software Engineer based in Chennai{" "}
              <span role="img" aria-label="home">
                🏡
              </span>
              .
            </h2>
            <p className="description">
              with Bachelors in Information Technology specializing in building
              exceptional, high-quality websites and applications.
            </p>
            <div className="read-more-container">
              <a className="read-more" href="#">
                Read More{" "}
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4"></div>
        </div>
      </div>
    </section>
  );
}
