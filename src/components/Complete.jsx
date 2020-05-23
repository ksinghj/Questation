import React from "react";
import { create, all } from "mathjs";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
import { replaceNums } from "./alg";
import { createAClass } from "../actions";
const config = {};
const math = create(all, config);

class Complete extends React.Component {
  mathjsTest = () => {
    let scope = { a: 5 };
    let test = math.evaluate("a+3", scope);
    console.log("mathjs test: ", test);
  };

  renderStudentsSheets = number => {
    // helper
    let studentsArr = [];
    let count = 0;
    while (count < number) {
      count++;
      studentsArr.push(count);
    }
    return studentsArr.map(student => {
      let newQuestions = {};
      newQuestions.one = replaceNums(this.props.questions.input1);
      newQuestions.two = replaceNums(this.props.questions.input2);
      newQuestions.three = replaceNums(this.props.questions.input3);
      newQuestions.four = replaceNums(this.props.questions.input4);
      newQuestions.five = replaceNums(this.props.questions.input5);
      console.log(`questions: `, newQuestions);

      this.props.createAClass(newQuestions);

      return <SheetPreview data={newQuestions} key={student} />;
    });
  };

  render() {
    return (
      <div>
        Every student in your class now has a unique set of questions.
        {this.renderStudentsSheets(this.props.students)}
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

export default connect(mapStateToProps, { createAClass })(Complete);

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
