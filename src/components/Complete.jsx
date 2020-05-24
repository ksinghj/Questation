import React from "react";
import { Link } from "react-router-dom";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
import { answers } from "../actions";
import "../styles/Complete/index.css";
import "../styles/misc/button.css";

class Complete extends React.Component {
  renderSheets = () => {
    return this.props.class.map((q, index) => {
      return <SheetPreview answersBool={false} data={q} sheet={index + 1} />;
    });
  };

  // restore scroll so options are visible
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="complete__container">
        <div className="complete__action-buttons">
          <button className="button" type="button">
            PDF view
          </button>
          <Link to="/answers">
            <button className="button whitespace-nw" type="button">
              Answer sheet
            </button>
          </Link>
          <button className="button whitespace-nw" type="button">
            Create new sheet
          </button>
        </div>
        <p className="complete__info">
          Every student in your class now has a unique set of questions, see
          below. You can print these through the <strong>PDF viewer</strong>,
          view the <strong>answer sheet</strong> and create a new set of
          question sheets using the buttons above.
        </p>
        {this.renderSheets()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    students: state.studentsReducer.students,
    class: state.classReducer,
  };
};

export default connect(mapStateToProps, { answers })(Complete);
