import React from "react";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  onDismiss = () => {
    history.push("/");
  };

  actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button onClick={this.onDismiss} className="ui button">
        Cancel
      </button>
    </React.Fragment>
  );

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete stream"
          content="Are you sure you want to delete this stream?"
          actions={this.actions}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default StreamDelete;

// Coming back to this tomorrow as prettier is having a fit
