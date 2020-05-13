import React from "react";
import { connect } from "react-redux";
import { createQuestion } from "../../actions";
import QuestionForm from "./QuestionForm";

class QuestionCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues); // change to question
  };

  render() {
    return (
      <div>
        <QuestionForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createQuestion })(QuestionCreate);
