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

  render() {
    return (
      <div>
        <form>{this.renderQuestions()}</form>
        <button className="ui button" onClick={this.addQuestion}>
          Add a question
        </button>
      </div>
    );
  }
}

export default connect(null, { createQuestion })(QuestionCreate);
