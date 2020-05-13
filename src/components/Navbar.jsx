import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
import qsLogo from "../img/questation-logo.png";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <img src={qsLogo} alt="logo" />
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Back to start
        </Link>
      </div>
    </div>
  );
};

export default Header;
