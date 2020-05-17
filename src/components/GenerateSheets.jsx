import React from "react";

import "../styles/misc/button.css";
import "../styles/GenerateSheets/index.css";

class GenerateSheets extends React.Component {
  state = { students: 0, notZero: false };

  handleStudentNumberEnter = e => {
    this.setState({ students: e.target.value });
    setTimeout(() => {
      if (this.state.students !== 0) {
        this.setState({ notZero: true });
      }
    }, 750);
  };

  render() {
    return (
      <div className="generatesheets__container">
        <h3>Important:</h3>
        <form>
          <label>Enter number of students in your class:</label>
          <input onChange={this.handleStudentNumberEnter} />
          <p>Generate unique sheets for {this.state.students} students.</p>
          <button
            className="button generatesheets__button"
            type="submit"
            disabled={this.state.notZero ? false : true}
          >
            Generate sheets
          </button>
        </form>
      </div>
    );
  }
}

export default GenerateSheets;
