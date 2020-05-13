import React from "react";
import { Field, reduxForm } from "redux-form"; // TODO: Use redux form in QuestionCreate

class QuestionForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    // Destructured formProps.input
    const className = `field ${meta.error && meta.touched ? "error" : ""}`; // string interpolation with ternerary operator
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="question"
            component={this.renderInput}
            label="Enter a question"
          />
          <button type="submit" className="ui button primary">
            Add to sheet
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.question) {
    errors.question = "Enter a question to continue";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(QuestionForm);
