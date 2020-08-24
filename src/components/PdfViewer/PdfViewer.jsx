import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/PdfViewer/index.css";
import html2canvas from "html2canvas";
import SheetPreview from "../../components/SheetPreview";

const PdfViewer = (props) => {
  const renderSheets = () => {
    return props.class.map((q, index) => {
      return (
        <SheetPreview
          data={q}
          sheet={index + 1}
          answersBool={false}
          key={index}
        />
      );
    });
  };

  html2canvas(document.querySelector(".sheet")).then((canvas) => {
    document.body.appendChild(canvas);
    console.log(canvas);
  });

  return (
    <React.Fragment>
      <div className="pdf__container">
        <Link to="/success" className="whitespace-nw">
          <button type="button" className="button">
            Back
          </button>
        </Link>
        <h5>PDF View</h5>
        <div className="pdf__content">
          <p>pdf viewer embed here</p>
        </div>
      </div>
      {renderSheets()}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    class: state.classReducer,
  };
};

export default connect(mapStateToProps, {})(PdfViewer);
