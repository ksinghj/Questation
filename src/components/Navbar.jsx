import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
import qsLogo from "../img/questation-logo.png";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <img
          src={qsLogo}
          alt="logo"
          style={{ width: "150px", height: "auto" }}
        />
      </Link>
      <div className="right menu">
        <Link style={{ alignSelf: "center", color: "black" }} to="/">
          <p>Back to start</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
