import React from "react";
import { connect } from "react-redux";
// const config = {};
// const math = create(all, config);
// import { create, all } from "mathjs";

class Answers extends React.Component {
  render() {
    return (
      <div>
        <p>Answers</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer };
};

export default connect(mapStateToProps, {})(Answers);
