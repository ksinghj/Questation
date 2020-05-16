import React from "react";
import SheetPreview from "./SheetPreview";
import GenerateSheets from "./GenerateSheets";

// import css

class SheetReview extends React.Component {
  render() {
    return (
      <div>
        <h2>Review Question Sheet</h2>
        <SheetPreview />
        <GenerateSheets />
      </div>
    );
  }
}

export default SheetReview;
