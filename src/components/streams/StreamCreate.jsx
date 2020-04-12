import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Field name="title" />
          <Field name="description" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
