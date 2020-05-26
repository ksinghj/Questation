import React from "react";
import SheetPreview from "./SheetPreview";
import GenerateSheets from "./GenerateSheets";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clickGoBack } from "../actions";

import "../styles/SheetReview/index.css";

class SheetReview extends React.Component {
  render() {
    return (
      <div className="sheetreview__container mt">
        <Link to="/create">
          <button
            type="button"
            className="sheetreview__button button"
            onClick={this.props.clickGoBack}
          >
            Go back
          </button>
        </Link>
        <h2>Review Question Sheet</h2>
        <p>
          Warning: Pressing go back will erase the questions from your sheet.
        </p>
        <SheetPreview answersBool={false} data={this.props.questions} />
        <GenerateSheets />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { questions: state.questionReducer.questions };
};

export default connect(mapStateToProps, { clickGoBack })(SheetReview);
