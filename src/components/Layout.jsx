import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== "/" && <Navbar />}
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default withRouter(Layout);

// creds to Reddit u/gremy0
// hide Navbar on StartScreen
