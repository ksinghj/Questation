import React from "react";
// import { create, all } from "mathjs";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
// const config = {};
// const math = create(all, config);

class Complete extends React.Component {
  renderStudentsSheets = () => {
    return this.props.class.map(studentQs => {
      return <SheetPreview data={studentQs} />;
    });
  };

  render() {
    return (
      <div>
        Every student in your class now has a unique set of questions.
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
