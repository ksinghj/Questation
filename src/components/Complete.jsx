import React from "react";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
import { answers } from "../actions";
import "../styles/Complete/index.css";
import "../styles/misc/button.css";

class Complete extends React.Component {
  renderStudentsSheets = () => {
    return this.props.class.map((studentQs, index) => {
      return <SheetPreview data={studentQs} sheet={index + 1} />;
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
          <button
            className="button whitespace-nw"
            type="button"
            onClick={this.props.answers}
          >
            Answer sheet
          </button>
          <button className="button whitespace-nw" type="button">
            Create new sheet
          </button>
        </div>
        <p className="complete__info">
          Every student in your class now has a unique set of questions, see
          below. You can print these through the PDF viewer, and view the answer
          sheet using the buttons above.
        </p>
        {this.renderStudentsSheets()}
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
