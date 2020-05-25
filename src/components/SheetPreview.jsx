import React from "react";
import { connect } from "react-redux";
import "../styles/SheetPreview/index.css";

// const SheetPreview = ({ data, sheet, answersBool }) => {
//   let arrToMap = Object.values(data);
//   return (
//     <div className="sheetpreview__container sheet">
//       <h4 className="sheetpreview__sheet-number">
//         {answersBool ? "Answers" : "Sheet"} {sheet}
//       </h4>
//       <ol className="sheetpreview__list">
//         {arrToMap.map((q, index) => {
//           return <li key={index}>{q}</li>;
//         })}
//       </ol>
//       <div className="sheetpreview__watermark">
//         <img
//           className="watermark__image"
//           src={require("../img/questation-logo.png")}
//           alt="Questation logo"
//         />
//       </div>
//     </div>
//   );
// };

class SheetPreview extends React.Component {
  render() {
    const { data, sheet, answersBool } = this.props;
    let arrToMap = Object.values(data);
    if (!answersBool) {
      return (
        <div className="sheetpreview__container sheet">
          <h4 className="sheetpreview__sheet-number">
            {answersBool ? "Answers" : "Sheet"} {sheet}
          </h4>
          <ol className="sheetpreview__list">
            {arrToMap.map((q, index) => {
              return <li key={index}>{q}</li>;
            })}
          </ol>
          <div className="sheetpreview__watermark">
            <img
              className="watermark__image"
              src={require("../img/questation-logo.png")}
              alt="Questation logo"
            />
          </div>
        </div>
      );
    }
    // answers
    return (
      <div className="sheetpreview__container sheet">
        <h4 className="sheetpreview__sheet-number">
          {answersBool ? "Answers" : "Sheet"} {sheet}
        </h4>
        <ol className="sheetpreview__list">
          {this.props.answers.map(arr => {
            return arr.map((ans, index) => {
              console.log(`ans`, ans);
              return <li key={index}>{ans}</li>;
            }); // needds chunking
          })}
        </ol>
        <div className="sheetpreview__watermark">
          <img
            className="watermark__image"
            src={require("../img/questation-logo.png")}
            alt="Questation logo"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer };
};

export default connect(mapStateToProps, {})(SheetPreview);
