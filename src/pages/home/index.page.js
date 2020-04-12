import React, { Component } from "react";
import Header from "./../../components/header/header.component";
import "./home.style.scss";
import Hero from "./sections/hero";
export default class HomePage extends Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <Hero />
      </div>
    );
  }
}
