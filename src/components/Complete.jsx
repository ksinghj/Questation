import React from "react";
import { create, all } from "mathjs";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
import { replaceNums } from "./alg";
const config = {};
const math = create(all, config);

class Complete extends React.Component {
  mathjsTest = () => {
    let scope = { a: 5 };
    let test = math.evaluate("a+3", scope);
    console.log("mathjs test: ", test);
  };

  // number to arr length function (helper)
  renderStudentsSheets = number => {
    let studentsArr = [];
    let count = 0;
    while (count < number) {
      count++;
      studentsArr.push(count);
    }
    return studentsArr.map(student => {
      let questions = {};
      // algorithm TODO: make alg run on every input for every student
      questions.one = replaceNums(this.props.questions.input1);
      questions.two = replaceNums(this.props.questions.input2);
      questions.three = replaceNums(this.props.questions.input3);
      questions.four = replaceNums(this.props.questions.input4);
      questions.five = replaceNums(this.props.questions.input5);
      console.log(`questions: `, questions);
      return <SheetPreview data={questions} key={student} />;
    });
  };

  render() {
    return (
      <div>
        Complete
        {this.renderStudentsSheets(this.props.students)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    students: state.studentsReducer.students,
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
