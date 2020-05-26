import React from "react";
import { connect } from "react-redux";
import SheetPreview from "./SheetPreview";
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
        {
          //   <div className="answers__banner">
          //   <Link to="/success">
          //     <button className="button">Go back</button>
          //   </Link>
          // </div>
        }
        <h3>Answers</h3>
        {this.renderSheets()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer };
};

export default connect(mapStateToProps, {})(Answers);
