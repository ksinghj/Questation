import React from "react";
import { connect } from "react-redux";
import "../styles/SheetPreview/index.css";

class SheetPreview extends React.Component {
  renderSheets = () => {
    const { data, sheet, answers } = this.props;
    let arrToMap = Object.values(data);
    return (
      <div className="sheetpreview__container sheet">
        <h4 className="sheetpreview__sheet-number">
          {answers ? "Answers" : "Sheet"} {sheet}
        </h4>
        <ol className="sheetpreview__list">
          {arrToMap.map(q => {
            // TODO: new key to remove console error
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

  render() {
    return <div>{this.renderSheets(this.props.answers)}</div>;
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer };
};

export default connect(mapStateToProps, {})(SheetPreview);
