import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    // Destructured formProps.input
    console.log(meta);
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
    errors.title = "Enter a title for your stream";
  }
  if (!formValues.description) {
    errors.description = "Your stream needs a description!";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
