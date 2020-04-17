import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import { Link } from "react-router-dom";
class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStream = () => {
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h2>{this.props.stream.description}</h2>
      </div>
    );
  };

  backButton = () => {
    return (
      <Link to="/" className="ui button primary">
        Back to streams
      </Link>
    );
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading your stream...</div>;
    }
    return (
      <div>
        {this.backButton()}
        <div>{this.renderStream()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
