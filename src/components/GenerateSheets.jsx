import React from "react";
import history from "../history";
import { connect } from "react-redux";
import { enterStudents } from "../actions";
import "../styles/misc/button.css";
import "../styles/GenerateSheets/index.css";

import { replaceNums } from "./alg";

class GenerateSheets extends React.Component {
  state = { students: 0, notZero: false };

  handleStudentNumberEnter = e => {
    this.setState({ students: e.target.value });
    setTimeout(() => {
      if (this.state.students !== 0) {
        this.setState({ notZero: true });
        // TODO: notZero should be false when state.students === 0
      }
    }, 500);
    if (this.state.students === 0) {
      this.setState({ notZero: false });
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    history.push("/success");
    if (this.state.notZero) {
      this.props.enterStudents(this.state.students);
    }

    // need to replaceNums() for every student
    // number to arr length function (helper)
    const loopForEveryStudent = number => {
      let numberAsArr = [];
      let count = 0;
      while (count < number) {
        count++;
        numberAsArr.push(count);
      }

      return numberAsArr.forEach(arrItem => {
        // algorithm TODO: make alg run on every input for every student
        replaceNums(this.props.questions.input1);
        replaceNums(this.props.questions.input2);
        replaceNums(this.props.questions.input3);
        replaceNums(this.props.questions.input4);
        replaceNums(this.props.questions.input5);
      });
    };

    loopForEveryStudent(this.state.students);
  };

  render() {
    return (
      <div className="generatesheets__container">
        <h3>Important:</h3>
        <form onSubmit={this.onFormSubmit}>
          <label>Enter number of students in your class:</label>
          <input onChange={this.handleStudentNumberEnter} />
          <p>Generate unique sheets for {this.state.students} students.</p>
          <button
            className="button generatesheets__button"
            type="submit"
            disabled={this.state.notZero ? false : true}
          >
            Generate sheets
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.questionReducer.questions };
};

export default connect(mapStateToProps, { enterStudents })(GenerateSheets);
