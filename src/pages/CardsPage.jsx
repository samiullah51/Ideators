import React from "react";
import "./CardsPage.css";
import logo2 from "../assets/logo2.svg";
import { Link } from "react-router-dom";
function CardsPage() {
  return (
    <div className="cards__page">
      <div
        className="cards__contents"
        style={{ background: "linear-gradient(#E1FCFF,#F5E3FF)" }}
      >
        <img src={logo2} alt="" />
        <p>Welcome to ASR</p>
        <span>Sign up and Experience a new world of crypto</span>
        {/* dots */}
        <div className="dots">
          <div className="single__dot active"></div>
          <div className="single__dot"></div>
          <div className="single__dot"></div>
        </div>
        {/* button */}
        <Link to="/register" className="startButton">
          Let's Start
        </Link>
        <Link to="/login">I already have an account</Link>
      </div>
    </div>
  );
}

export default CardsPage;
