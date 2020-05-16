import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import QuestionCreate from "./QuestionCreate";
import StartScreen from "./StartScreen";
import SheetReview from "./SheetReview";

import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Route path="/" exact component={StartScreen} />
          <Route path="/" component={Navbar} />
          <Switch>
            <Route path="/create" component={QuestionCreate} />
            <Route path="/review" exact component={SheetReview} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
