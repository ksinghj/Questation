import React from "react";
import { connect } from "react-redux";
import "../styles/SheetPreview/index.css";

class SheetPreview extends React.Component {
  render() {
    const { data, sheet, answersBool } = this.props;
    if (!answersBool) {
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
    }
    // answers
    return (
      <div className="sheetpreview__container sheet">
        <h4 className="sheetpreview__sheet-number">
          {answersBool ? "Answers" : "Sheet"} {sheet}
        </h4>
        <ol className="sheetpreview__list">
          {data.map(q => {
            return <li>{q}</li>;
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
  }
}

export default connect(null, {})(SheetPreview);
