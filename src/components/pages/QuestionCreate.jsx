import React from "react";
import { connect } from "react-redux";
import { createQuestionSheet } from "../../actions";

class QuestionCreate extends React.Component {
  state = { input1: "", input2: "", input3: "", input4: "", input5: "" };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // this.props.createQuestionSheet(this.state);
  };

  handeInput1Change = e => {
    this.setState({ input1: e.target.value });
  };

  handeInput2Change = e => {
    this.setState({ input2: e.target.value });
  };

  handeInput3Change = e => {
    this.setState({ input3: e.target.value });
  };

  handeInput4Change = e => {
    this.setState({ input4: e.target.value });
  };

  handeInput5Change = e => {
    this.setState({ input5: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="ui input">
            <input onChange={this.handeInput1Change} id="1" />
          </div>
          <div className="ui input">
            <input onChange={this.handeInput2Change} id="2" />
          </div>
          <div className="ui input">
            <input onChange={this.handeInput3Change} id="3" />
          </div>
          <div className="ui input">
            <input onChange={this.handeInput4Change} id="4" />
          </div>
          <div className="ui input">
            <input onChange={this.handeInput5Change} id="5" />
          </div>
          <button className="ui button green" type="submit">
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createQuestionSheet })(QuestionCreate);
