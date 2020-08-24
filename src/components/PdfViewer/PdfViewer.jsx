import React from "react";
import { Link } from "react-router-dom";
import useScript from "../../hooks/useScript";

const PdfViewer = () => {
  return (
    <div className="">
      <Link to="/create" className="whitespace-nw">
        <button type="button" className="button">
          Go back
        </button>
      </Link>
      <p>PdfViewer</p>
    </div>
  );
};

export default PdfViewer;
