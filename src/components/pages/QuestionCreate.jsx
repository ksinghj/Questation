import React from "react";
import { connect } from "react-redux";
import { createQuestion } from "../../actions";
import QuestionForm from "./QuestionForm";

class QuestionCreate extends React.Component {
  state = { questions: [1] };

  onSubmit = formValues => {
    this.props.createQuestion(formValues);
  };

  addQuestion = () => {
    let length = this.state.questions.length + 1;
    this.setState({ questions: this.state.questions.concat(length + 1) });
  };

  renderQuestions = () => {
    return this.state.questions.map(item => {
      return <QuestionForm onSubmit={this.onSubmit} key={item} />;
    });
  };

  onQuestionFormSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onQuestionFormSubmit}>
          {this.renderQuestions()}
          <button className="ui button" onClick={this.addQuestion}>
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

export default connect(null, { createQuestion })(QuestionCreate);
