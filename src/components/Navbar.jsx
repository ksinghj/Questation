import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
import qsLogo from "../img/questation-logo.png";

const Header = () => {
  return (
    <div className="ui secondary pointing menu navbar">
      <Link to="/" className="item">
        <img
          src={qsLogo}
          alt="logo"
          style={{ width: "200px", height: "auto", margin: "0.8em 0" }}
        />
      </Link>
      <div className="right menu">
        <Link style={{ alignSelf: "center", color: "black" }} to="/">
          <button className="button whitespace-nw" type="button">
            Back to start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
