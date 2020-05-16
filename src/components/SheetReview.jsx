import React from "react";
import SheetPreview from "./SheetPreview";
import GenerateSheets from "./GenerateSheets";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clickGoBack } from "../actions";

import "../styles/SheetReview/index.css";
import "../styles/misc/button.css";

class SheetReview extends React.Component {
  render() {
    return (
      <div className="sheetreview__container">
        <Link to="/create">
          <button
            type="button"
            className="button"
            onClick={this.props.clickGoBack}
          >
            Go back
          </button>
        </Link>
        <h2>Review Question Sheet</h2>
        <SheetPreview questions={this.props.questions} />
        <GenerateSheets />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.questionReducer.questions };
};

export default connect(mapStateToProps, { clickGoBack })(SheetReview);
