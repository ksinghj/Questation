import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StreamList from "./pages/StreamList";
import StreamCreate from "./pages/StreamCreate";
import StreamDelete from "./pages/StreamDelete";
import StreamShow from "./pages/StreamShow";
import StreamEdit from "./pages/StreamEdit";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
