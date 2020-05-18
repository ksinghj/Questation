import React from "react";
import { create, all } from "mathjs";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
const config = {};
const math = create(all, config);

class Complete extends React.Component {
  mathjsTest = () => {
    let scope = { a: 5 };
    let test = math.evaluate("a+3", scope);
    console.log("mathjs test: ", test);
  };

  renderStudentsSheets = students => {
    // TODO: Convert number into incremented array (done), now MAKE IT A FUNCTION
    // let arr = [];
    // let count = 0;
    // let num = 6;
    // while (count < num) {
    //   count++;
    //   arr.push(count);
    // }

    // console.log(arr);
    //let studentsArr = numToArr(students);

    let studentsArr = [1, 2, 3, students];
    studentsArr.map(student => {
      return <SheetPreview data={this.props.questions} />;
    });
    return <SheetPreview data={this.props.questions} />;
  };

  render() {
    console.log(this.props.students);
    return (
      <div>
        Complete{this.mathjsTest()}
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
