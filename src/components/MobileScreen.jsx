import React from "react";
import "../styles/MobileScreen/index.css";

const MobileScreen = () => {
  return (
    <div className="mobilescreen__container">
      <img
        style={{ maxWidth: "75vw" }}
        src={require("../img/questation-logo.png")}
        alt="Questation logo"
        className="qs__logo"
      />
      <p>
        Questation is currently a desktop-only application. Please register your
        interest for a mobile app below.
      </p>
      <form className="mobilescreen__form">
        <div className="ui input">
          <input type="text" placeholder="someone@example.com" />
        </div>
        <button className="button" type="submit">
          Let me know
        </button>
      </form>
    </div>
  );
};

export default MobileScreen;
