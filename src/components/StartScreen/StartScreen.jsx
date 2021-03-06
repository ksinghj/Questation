import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../../styles/StartScreen/startscreen.css"

class StartScreen extends Component {
  render() {
    // TODO: get options from questation old
    return (
      <div className="container">
        <section className="main">
          <div className="img-div main-flex-item">
            <img
              src={require("../../img/questation-logo.png")}
              alt="Questation logo"
              className="ss__logo"
            />
          </div>
          <div className="button-div main-flex-item start-btn-div">
            <Link to="/create">
              <button data-function="start" type="button">
                Start
              </button>
            </Link>
          </div>
          {
            // options was renamed to more
          }
          <div className="button-div main-flex-item options-btn-div">
            <Link to="/more">
              <button data-function="options" type="button">
                More
              </button>
            </Link>
          </div>
        </section>
        <section className="footer"></section>
      </div>
    )
  }
}

export default StartScreen
