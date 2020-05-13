import React from "react";
import { connect } from "react-redux";
import { createQuestionSheet } from "../../actions";
import QuestionForm from "./QuestionForm";

class QuestionCreate extends React.Component {
  state = {
    questions: [1],
    formValues: "",
  };

  addQuestion = e => {
    e.preventDefault();
    console.log("form submitted");
    this.props.createQuestionSheet(this.state.formValues);
    let length = this.state.questions.length + 1;
    this.setState({ questions: this.state.questions.concat(length + 1) });
  };

  renderQuestions = () => {
    return this.state.questions.map((item, index) => {
      return (
        <QuestionForm
          onInputChange={this.onInputChange}
          key={item}
          arrayIndex={index}
        />
      );
    });
  };

  onQuestionFormSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
    this.props.createQuestionSheet(this.state.formValues); // caLL with this.state.formValues
  };

  onInputChange = e => {
    this.setState({
      formValues: e.target.value,
    });
    console.log(this.state.formValues);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onQuestionFormSubmit}>
          {this.renderQuestions()}
          <button
            type="button"
            className="ui button"
            onClick={this.addQuestion}
          >
            Add a question
          </button>
          <button className="ui button green" type="submit">
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createQuestionSheet })(QuestionCreate);
