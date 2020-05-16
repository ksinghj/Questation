import React from "react";
import SheetPreview from "./SheetPreview";
import GenerateSheets from "./GenerateSheets";
import { Link } from "react-router-dom";

import "../styles/SheetReview/index.css";
import "../styles/misc/button.css";

class SheetReview extends React.Component {
  render() {
    return (
      <div className="sheetreview__container">
        <Link to="/create">
          <button type="button" className="button">
            Go back
          </button>
        </Link>
        <h2>Review Question Sheet</h2>
        <SheetPreview />
        <GenerateSheets />
      </div>
    );
  }
}

export default SheetReview;
