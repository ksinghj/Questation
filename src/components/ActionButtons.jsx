import React from "react";
import { Link } from "react-router-dom";
import "../styles/ActionButtons/index.css";

class ActionButtons extends React.Component {
  render() {
    const { isAnswers } = this.props;
    return (
      <div className="action-buttons">
        <Link to="/success" className="whitespace-nw">
          <button className="button whitespace-nw" type="button" disabled>
            PDF view
          </button>
        </Link>
        {isAnswers ? (
          <Link to="/success" className="whitespace-nw">
            <button className="button whitespace-nw" type="button">
              Question sheets
            </button>
          </Link>
        ) : (
          <Link to="/answers" className="whitespace-nw">
            <button className="button whitespace-nw" type="button">
              Answer sheets
            </button>
          </Link>
        )}
        <Link to="/create" className="whitespace-nw">
          <button className="button whitespace-nw" type="button">
            New sheet
          </button>
        </Link>
      </div>
    );
  }
}

export default ActionButtons;
