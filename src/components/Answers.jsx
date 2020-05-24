import React from "react";
import { connect } from "react-redux";
import SheetPreview from "./SheetPreview";
// const config = {};
// const math = create(all, config);
// import { create, all } from "mathjs";

class Answers extends React.Component {
  renderSheets = () => {
    return this.props.class.map((studentQs, index) => {
      return <SheetPreview data={studentQs} sheet={index + 1} answers />;
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
