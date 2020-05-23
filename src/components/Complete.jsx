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

// evaluate expressions
// math.evaluate('sqrt(3^2 + 4^2)')        // 5
// math.evaluate('sqrt(-4)')               // 2i
// math.evaluate('2 inch to cm')           // 5.08 cm
// math.evaluate('cos(45 deg)')            // 0.7071067811865476

// provide a scope
// let scope = {
//     a: 3,
//     b: 4
// }
// math.evaluate('a * b', scope)           // 12
// math.evaluate('c = 2.3 + 4.5', scope)   // 6.8
// scope.c
