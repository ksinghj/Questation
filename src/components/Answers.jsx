import React from "react";
import { connect } from "react-redux";
import SheetPreview from "./SheetPreview";
import ActionButtons from "./ActionButtons";
// import { Link } from "react-router-dom";
import "../styles/Answers/index.css";
import "../styles/misc/button.css";

class Answers extends React.Component {
  renderSheets = () => {
    return this.props.answers.map((question, index) => {
      return <SheetPreview data={question} sheet={index + 1} answersBool />;
    });
  };

  render() {
    return (
      <div className="answers__container">
        <h3>Answers</h3>
        <ActionButtons isAnswers />
        {this.renderSheets()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer };
};

export default connect(mapStateToProps, {})(Answers);
