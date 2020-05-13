import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/StartScreen/startscreen.css";

class StartScreen extends Component {
  render() {
    // get options from questation old later
    return (
      <div className="container">
        <section className="main">
          <div className="img-div main-flex-item">
            <img
              src={require("../img/questation-logo.png")}
              alt="Questation logo"
            />
          </div>
          <div className="button-div main-flex-item start-btn-div">
            <Link to="/questation/create">
              <button data-function="start" type="button">
                Start
              </button>
            </Link>
          </div>
          <div className="button-div main-flex-item options-btn-div">
            <button data-function="options" type="button">
              Options
            </button>
          </div>
        </section>
        <section className="footer"></section>
      </div>
    );
  }
}

export default StartScreen;