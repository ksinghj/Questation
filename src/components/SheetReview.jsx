import React from "react";
import SheetPreview from "./SheetPreview";
import GenerateSheets from "./GenerateSheets";

import "../styles/SheetReview/index.css";

class SheetReview extends React.Component {
  render() {
    return (
      <div className="sheetreview__container">
        <h2>Review Question Sheet</h2>
        <SheetPreview />
        <GenerateSheets />
      </div>
    );
  }
}

export default SheetReview;
