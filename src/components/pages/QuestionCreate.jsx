import React from "react";
import { connect } from "react-redux";

class QuestionCreate extends React.Component {
  render() {
    return (
      <div>
        QuestionCreate
        <form>
          <div class="ui input">
            <input type="text" placeholder="Example: 91+(5-2)/2" />
          </div>
          <div class="ui animated button" tabindex="0">
            <div class="visible content">Add question +</div>
            <div class="hidden content">
              <i class="plus icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.questions };
};

export default connect(mapStateToProps, {})(QuestionCreate);
