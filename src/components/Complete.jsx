import React from "react";
// import { create, all } from "mathjs";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
// const config = {};
// const math = create(all, config);

import "../styles/misc/button.css";

class Complete extends React.Component {
  renderStudentsSheets = () => {
    return this.props.class.map(studentQs => {
      return <SheetPreview data={studentQs} />;
    });
  };

  render() {
    return (
      <div>
        <p>Every student in your class now has a unique set of questions.</p>
        <p>
          View the answer sheet{" "}
          <span className="complete__answersheet-span">here.</span>
        </p>
        <div className="complete__action-buttons">
          <button className="button" type="button">
            PDF view
          </button>
          <button className="button whitespace-nw" type="button">
            Answer sheet
          </button>
        </div>
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

export default connect(mapStateToProps, {})(Complete);
