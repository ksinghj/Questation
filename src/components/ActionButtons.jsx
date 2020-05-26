import React from "react";
import { Link } from "react-router-dom";
import "../styles/ActionButtons/index.css";

const ActionButtons = ({ isAnswers }) => {
  if (!isAnswers) {
    return (
      <div className="action-buttons">
        <button className="button" type="button">
          PDF view
        </button>
        <Link to="/answers">
          <button className="button whitespace-nw" type="button">
            Answer sheet
          </button>
        </Link>
        <button className="button whitespace-nw" type="button">
          Create new sheet
        </button>
      </div>
    );
  }
  return (
    <div className="action-buttons">
      <button className="button" type="button">
        PDF view
      </button>
      <button className="button whitespace-nw" type="button">
        <Link to="/success">Question sheets</Link>
      </button>
      <button className="button whitespace-nw" type="button">
        Create new sheet
      </button>
    </div>
  );
};

export default ActionButtons;
