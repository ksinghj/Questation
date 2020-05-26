import React from "react";
import { Link } from "react-router-dom";
import "../styles/ActionButtons/index.css";

const ActionButtons = ({ isAnswers }) => {
  return (
    <div className="action-buttons">
      <button className="button whitespace-nw" type="button" disabled>
        PDF view
      </button>
      {isAnswers ? (
        <Link to="/success" className="whitespace-nw">
          <button className="button whitespace-nw" type="button">
            Question sheets
          </button>
        </Link>
      ) : (
        <Link to="/answers" className="whitespace-nw">
          <button className="button whitespace-nw" type="button">
            Answer sheet
          </button>
        </Link>
      )}
      <button className="button whitespace-nw" type="button">
        Create new sheet
      </button>
    </div>
  );
};

export default ActionButtons;
