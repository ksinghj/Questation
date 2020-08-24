import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/PdfViewer/index.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
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

  // TODO: want to loop over sheets and add to ONE PDF
  let sheetsToPDF = Array.from(document.querySelectorAll(".sheet"));
  console.log(sheetsToPDF);

  const pdf = new jsPDF();

  sheetsToPDF.forEach((sheet) => {
    console.log(sheet);
    html2canvas(sheet).then((canvas) => {
      document.body.appendChild(canvas);

      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, 0);
    });
  });

  // this is making empty pdf, is running too early maybe ?
  pdf.save("download.pdf");

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
          <p>
            PDF should download automatically, if not{" "}
            <a onClick={() => console.log("download pdf fuction")}>
              click here
            </a>
          </p>
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
