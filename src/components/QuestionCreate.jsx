import React from "react";
import { connect } from "react-redux";
import { createQuestionSheet, clickContinue } from "../actions";
import history from "../history";

import "../styles/QuestionCreate/index.css";

class QuestionCreate extends React.Component {
  state = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.createQuestionSheet(this.state);
    history.push("/review");
  };

  handeInput1Change = e => {
    this.setState({ input1: e.target.value });
  };

  handeInput2Change = e => {
    this.setState({ input2: e.target.value });
  };

  handeInput3Change = e => {
    this.setState({ input3: e.target.value });
  };

  handeInput4Change = e => {
    this.setState({ input4: e.target.value });
  };

  handeInput5Change = e => {
    this.setState({ input5: e.target.value });
  };

  // prevQuestion = (qNo) => {

  // }

  clickContinue = () => {
    // if (this.state.clickCount === 0) {
    //   alert("pls check");
    //   this.setState({ clickCount: 1 });
    //   return;
    // }
    // if (this.state.clickCount === 1) {
    //   this.props.clickContinue();
    //   this.setState({ clickCount: 0 });
    //   return;
    // }
    switch (this.state.clickCount) {
      case 0:
        alert("pls check");
        this.setState({ clickCount: 1 });
        break;
      case 1:
        this.props.clickContinue();
        this.setState({ clickCount: 0 });
        break;
      default:
        console.log("Possible error in clickContinue");
        break;
    }
  };

  render() {
    return (
      <div className="questioncreate__container">
        <h2>Create a Question Sheet</h2>
        <p>Questation only allows 5 questions for now.</p>
        <p>
          Warning: After pressing continue you won't be able to edit your
          questions, so double check!
        </p>
        <form
          onSubmit={this.onFormSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="ui input questioncreate__input">
            <input onChange={this.handeInput1Change} id="1" />
          </div>
          <div className="ui input questioncreate__input">
            <input onChange={this.handeInput2Change} id="2" />
          </div>
          <div className="ui input questioncreate__input">
            <input onChange={this.handeInput3Change} id="3" />
          </div>
          <div className="ui input questioncreate__input">
            <input onChange={this.handeInput4Change} id="4" />
          </div>
          <div className="ui input questioncreate__input">
            <input onChange={this.handeInput5Change} id="5" />
          </div>
          <button
            className="button questioncreate__continue"
            type="submit"
            onClick={this.clickContinue}
          >
            Continue
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    goBackClicked: state.goBackClicked,
    questions: state.questionReducer.questions,
  };
};

export default connect(mapStateToProps, { createQuestionSheet, clickContinue })(
  QuestionCreate
);
