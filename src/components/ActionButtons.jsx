import React from "react";
import { Link } from "react-router-dom";
import "../styles/ActionButtons/index.css";
// import html2canvas from "html2canvas";

class ActionButtons extends React.Component {
  render() {
    const { isAnswers } = this.props;

    const pdfView = () => {
      console.log("pdfzzz");
    };

    return (
      <div className="action-buttons">
        {
          // <button
          //   className="button whitespace-nw"
          //   type="button"
          //   onClick={() => pdfView()}
          // >
          //   PDF view
          // </button>
        }
        <Link to="/pdfviewer" className="whitespace-nw">
          <button className="button whitespace-nw" type="button">
            PDF view
          </button>
        </Link>
        {isAnswers ? (
          <Link to="/success" className="whitespace-nw">
            <button className="button whitespace-nw" type="button">
              Question sheets
            </button>
          </Link>
        ) : (
          <Link to="/answers" className="whitespace-nw">
            <button className="button whitespace-nw" type="button">
              Answer sheets
            </button>
          </Link>
        )}
        <Link to="/create" className="whitespace-nw">
          <button className="button whitespace-nw" type="button">
            New sheet
          </button>
        </Link>
      </div>
    );
  }
}

export default ActionButtons;
