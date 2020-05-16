import React from "react";
import "../styles/SheetPreview/index.css";

// This is the sheet preview
// only questions display on a paper here
// and thats it!!

const SheetPreview = ({ props }) => {
  let questions = ["1232/2", "56*7", "9+9", "23/3", "5-7"];
  return (
    <div className="sheetpreview__container sheet">
      <ol className="sheetpreview__list">
        {questions.map(q => {
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

export default SheetPreview;
