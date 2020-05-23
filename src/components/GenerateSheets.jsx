import React from "react";
import history from "../history";
import { connect } from "react-redux";
import { enterStudents } from "../actions";
import "../styles/misc/button.css";
import "../styles/GenerateSheets/index.css";
import { createAClass } from "../actions";
import { replaceNums } from "./alg";

class GenerateSheets extends React.Component {
  state = { students: 0, notZero: false, classArr: null };

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
  };

  classToStore = async () => {
    let classArr = [];

    for (let index = 0; index < 5; index++) {
      // TODO: students string to number ^
      let newQuestions = {};
      newQuestions.one = replaceNums(this.props.questions.input1);
      newQuestions.two = replaceNums(this.props.questions.input2);
      newQuestions.three = replaceNums(this.props.questions.input3);
      newQuestions.four = replaceNums(this.props.questions.input4);
      newQuestions.five = replaceNums(this.props.questions.input5);
      console.log(`questions: `, newQuestions);
      classArr.push(newQuestions);
    }
    console.log(classArr);
    await this.props.createAClass(classArr);
  };

  render() {
    return (
      <div className="generatesheets__container">
        <h3>Important:</h3>
        <form onSubmit={this.onFormSubmit}>
          <label>Enter number of students in your class:</label>
          <input onChange={this.handleStudentNumberEnter} type="number" />
          <p>Generate unique sheets for {this.state.students} students.</p>
          <button
            className="button generatesheets__button"
            type="submit"
            disabled={this.state.notZero ? false : true}
            onClick={this.classToStore()}
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

export default connect(mapStateToProps, { enterStudents, createAClass })(
  GenerateSheets
);
