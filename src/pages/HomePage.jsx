import React from "react";
import "./HomePage.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <Link to="/cards" className="home__page">
      <div
        className="contents"
        style={{ background: "linear-gradient(#47E4F3,#B752F1)" }}
      >
        <img src={logo} alt="" />
      </div>
    </Link>
  );
}

export default HomePage;
