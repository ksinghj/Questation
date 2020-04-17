import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDismiss = () => {
    history.push("/");
  };

  renderActions = () => (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button onClick={this.onDismiss} className="ui button">
        Cancel
      </button>
    </React.Fragment>
  );

  renderContent = () => {
    console.log(this.props);
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete "${this.props.stream.title}"?`;
  };

  render() {
    return (
      <Modal
        title="Delete stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);

// Coming back to this tomorrow as prettier is having a fit
