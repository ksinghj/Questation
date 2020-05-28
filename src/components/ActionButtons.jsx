import React from "react";
import { Link } from "react-router-dom";
import "../styles/ActionButtons/index.css";

const ActionButtons = ({ isAnswers, props }) => {
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
            Answer sheet
          </button>
        </Link>
      )}
      <Link
        to="/create"
        className="whitespace-nw"
        onClick={props.purgePersistor()}>
        <button className="button whitespace-nw" type="button">
          Create new sheet
        </button>
      </Link>
    </div>
  );
};

export default ActionButtons;
