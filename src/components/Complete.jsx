// /success
import React from "react";
import ActionButtons from "./ActionButtons";
import SheetPreview from "./SheetPreview";
import { connect } from "react-redux";
import { answers } from "../actions";
import "../styles/Complete/index.css";
import "../styles/global.css";
import ScrollUpButton from "react-scroll-up-button";

class Complete extends React.Component {
  renderSheets = () => {
    return this.props.class.map((q, index) => {
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

  // restore scroll so options are visible
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="complete__container mt">
        <h2>Sheets generated</h2>
        <ActionButtons />
        <p className="complete__info">
          Every student in your class now has a unique set of questions, see
          below. You can print these through the <strong>PDF viewer</strong>,
          view the <strong>answer sheets</strong> and create a new set of
          question sheets using the buttons above.
        </p>
        {this.renderSheets()}
        <ScrollUpButton ContainerClassName="button scroll-button" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    students: state.studentsReducer.students,
    class: state.classReducer,
  };
};

export default connect(mapStateToProps, { answers })(Complete);
