import React from "react";
import "./SignUp.css";
import back from "../assets/back.svg";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup__page">
      <div
        className="signup__contents"
        style={{ background: "linear-gradient(#E1FCFF,#F5E3FF)" }}
      >
        <div className="header">
          <Link to="/cards">
            <img src={back} alt="" />
          </Link>
          <p className="title">Sign Up</p>
        </div>
        <div className="single__input">
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder="+92 3xxxxxxxxxxx" />
        </div>
        <div className="single__input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="single__input">
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="Enter first name" />
        </div>
        <div className="single__input">
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Enter first name" />
        </div>
        <div className="single__input">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="single__input">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter first name" />
        </div>
        {/* button */}
        <Link to="/verify" className="startButton">
          Let's Start
        </Link>
        <Link to="/login">I already have an account</Link>
      </div>
    </div>
  );
}

export default SignUp;
