import React from "react";
import "./SignUp.css";
import back from "../assets/back.svg";
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div className="signup__page">
      <div
        className="signup__contents"
        style={{ background: "linear-gradient(#E1FCFF,#F5E3FF)" }}
      >
        <div className="header">
          <Link to="/verify">
            <img src={back} alt="" />
          </Link>
          <p className="title">Log in</p>
        </div>

        <div className="single__input">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Enter Email" />
        </div>

        <div className="single__input">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter first name" />
        </div>
        <span className="forgot">Forgot password?</span>
        {/* button */}
        <Link className="startButton">Login</Link>
        <Link to="/register">I don’t have an account</Link>
      </div>
    </div>
  );
}

export default Signin;
