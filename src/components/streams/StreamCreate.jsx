import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // Destructured formProps.input
    return (
      <div className="field">
        <label>{label}</label>
        <input required {...input} />
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

  switch (formValues) {
    case !formValues.title:
      return (errors.title = "Enter a title for your stream");
    case !formValues.description:
      return (errors.description = "Your stream needs a description!");
    default:
      return errors;
  }
};

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
