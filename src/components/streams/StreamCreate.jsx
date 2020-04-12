import React from "react";
import { Field, reduxForm } from "redux-form";
// Most of this file is standard redux-form syntax
class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    // Destructured formProps.input
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <button type="submit" className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    return (errors.title = "Enter a title for yourr stream");
  }
  if (!formValues.description) {
    return (errors.description = "Your stream needs a description!");
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
