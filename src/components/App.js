import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import QuestionCreate from "./pages/QuestionCreate";
import StartScreen from "./StartScreen";

// template comps
import StreamCreate from "./pages/StreamCreate";
import StreamShow from "./pages/StreamShow";
import StreamEdit from "./pages/StreamEdit";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Route path="/" exact component={StartScreen} />
          <Route path="/questation" component={Navbar} />
          <Switch>
            <Route path="/questation/create" component={QuestionCreate} />
            <Route path="/questation/new" exact component={StreamCreate} />
            <Route path="/questation/:id" exact component={StreamShow} />
            <Route path="/questation/edit/:id" exact component={StreamEdit} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
