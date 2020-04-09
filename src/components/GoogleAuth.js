import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "142108740797-l349m9i6u24jjafqs34ooo6vndehm6ma.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // check isSignedIn
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    switch (this.state.isSignedIn) {
      case null:
        return null;
      case true:
        return (
          <button
            onClick={this.onSignOutClick}
            className="ui red google button">
            <i className="google icon" />
            Sign Out
          </button>
        );
      default:
        return (
          <button
            onClick={this.onSignInClick}
            className="ui green google button">
            <i className="google icon" />
            Sign in with Google
          </button>
        );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

// TODO: Add this file to HELPERS when complete for other apps
