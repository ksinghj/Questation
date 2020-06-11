import React from "react";
import demo from "../sr_demo.mov";
import useWindowDimensions from "../useWindowDimensions";
import "../styles/More/index.css";

const More = () => {
  const { width } = useWindowDimensions();

  const videoWidth = width => {
    switch (width) {
      case width < 400:
        return "350px";
      case width > 401 && width < 800:
        return "400px";
      case width > 801 && width < 1200:
        return "800px";
      default:
        return "1000px";
    }
  };

  return (
    <div className="more__container">
      <p className="more__github-link">
        <a
          href="https://github.com/ksinghj/Questation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute here
        </a>
      </p>
      <div className="more__demo">
        <label>See the tutorial demo:</label>
        <video width={videoWidth(width)} controls autoplay>
          <source src={demo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default More;
