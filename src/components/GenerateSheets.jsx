import React from "react";

import "../styles/misc/button.css";
import "../styles/GenerateSheets/index.css";

class GenerateSheets extends React.Component {
  render() {
    return (
      <div className="generatesheets__container">
        <p>
          Generate unique sheets for <input type="text" /> students.
        </p>
        <button className="button generatesheets__button" type="submit">
          Generate sheets
        </button>
      </div>
    );
  }
}

export default GenerateSheets;
