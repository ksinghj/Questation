import React from "react";
import { connect } from "react-redux";
import SheetPreview from "./SheetPreview";
import ActionButtons from "./ActionButtons";
// import { Link } from "react-router-dom";
import "../styles/Answers/index.css";
import "../styles/global.css";
import ScrollUpButton from "react-scroll-up-button";

class Answers extends React.Component {
  renderSheets = () => {
    return this.props.answers.map((question, index) => {
      return (
        <SheetPreview
          data={question}
          sheet={index + 1}
          key={index}
          answersBool
        />
      );
    });
  };

  render() {
    return (
      <div className="answers__container mt">
        <h2 className="answers__header">Answers</h2>
        <ActionButtons isAnswers />
        {this.renderSheets()}
        <ScrollUpButton ContainerClassName="button scroll-button" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer };
};

export default connect(mapStateToProps, {})(Answers);
