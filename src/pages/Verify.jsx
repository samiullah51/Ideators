import React from "react";
import "./CardsPage.css";
import verify from "../assets/verify.svg";
import { Link } from "react-router-dom";
function Verify() {
  return (
    <div className="cards__page">
      <div
        className="cards__contents"
        style={{ background: "linear-gradient(#E1FCFF,#F5E3FF)" }}
      >
        <img src={verify} alt="" />
        <p>OTP Verification</p>
        <span>Enter your OTP code here</span>
        {/* dots */}
        <div className="circles">
          <p className="single__circle">5</p>
          <p className="single__circle">3</p>
          <p className="single__circle">1</p>
          <p className="single__circle">9</p>
        </div>
        {/* button */}
        <Link to="/login" className="startButton">
          Verify
        </Link>
        <a>Resent Code</a>
      </div>
    </div>
  );
}

export default Verify;
