import React from "react";
import { connect } from "react-redux";
import SheetPreview from "./SheetPreview";
import { create, all } from "mathjs";
// mathjs config
const config = {};
const math = create(all, config);

class Answers extends React.Component {
  renderSheets = () => {
    return this.props.class.map((question, index) => {
      let ans = math.evaluate("4+4");
      console.log(ans);
      return <SheetPreview data={question} sheet={index + 1} answers />;
    });
  };

  render() {
    return (
      <div>
        <p>Answers</p>
        {this.renderSheets()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer, class: state.classReducer };
};

export default connect(mapStateToProps, {})(Answers);
