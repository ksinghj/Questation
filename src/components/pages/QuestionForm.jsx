import React from "react";

class QuestionForm extends React.Component {
  state = { value: "" };
  render() {
    return (
      <div>
        <div className="ui input">
          <input type="text" />
        </div>
        <button className="ui button red">Delete</button>
      </div>
    );
  }
}

export default QuestionForm;
