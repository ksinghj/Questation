import React from "react";
import { connect } from "react-redux";
import "../styles/SheetPreview/index.css";

const SheetPreview = ({ data, sheet, answersBool }) => {
  let arrToMap = Object.values(data);
  return (
    <div className="sheetpreview__container sheet">
      <h4 className="sheetpreview__sheet-number">
        {answersBool ? "Answers" : "Sheet"} {sheet}
      </h4>
      <ol className="sheetpreview__list">
        {arrToMap.map((q, index) => {
          return <li key={index}>{q}</li>;
        })}
      </ol>
      <div className="sheetpreview__watermark">
        <img
          className="watermark__image"
          src={require("../img/questation-logo.png")}
          alt="Questation logo"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { answers: state.answersReducer };
};

export default connect(mapStateToProps, {})(SheetPreview);
