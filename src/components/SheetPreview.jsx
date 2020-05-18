import React from "react";
import { connect } from "react-redux";
import "../styles/SheetPreview/index.css";

const SheetPreview = ({ data }) => {
  let arrToMap = Object.values(data);

  return (
    <div className="sheetpreview__container sheet">
      <ol className="sheetpreview__list">
        {arrToMap.map(q => {
          return <li key={q}>{q}</li>;
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
  return { questions: state.questionReducer.questions };
};

export default connect(mapStateToProps, {})(SheetPreview);
