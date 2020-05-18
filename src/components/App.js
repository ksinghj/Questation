import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./Navbar";
import QuestionCreate from "./QuestionCreate";
import StartScreen from "./StartScreen";
import SheetReview from "./SheetReview";
import Complete from "./Complete";
// npm
import { PersistGate } from "redux-persist/integration/react";
import history from "../history";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

let persistor = persistStore(store);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <div className="ui container">
            <Router history={history}>
              <Route path="/" exact component={StartScreen} />
              <Route path="/" component={Navbar} />
              <Switch>
                <Route path="/create" component={QuestionCreate} />
                <Route path="/review" exact component={SheetReview} />
                <Route path="/success" exact component={Complete} />
              </Switch>
            </Router>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
