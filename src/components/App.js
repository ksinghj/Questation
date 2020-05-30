import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// components
import Layout from "./Layout";
import StartScreen from "./StartScreen";
import Options from "./Options";
import QuestionCreate from "./QuestionCreate";
import SheetReview from "./SheetReview";
import Complete from "./Complete";
import Answers from "./Answers";
import MobileScreen from "./MobileScreen";
// global style
import "../styles/global.css";

// imp
import Media from "react-media";
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
    applyMiddleware(thunk)
    // redux dev tools
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

let persistor = persistStore(store);

class App extends React.Component {
  render() {
    // use this to clear store
    //persistor.purge();
    return (
      <Media query={{ maxWidth: 1000 }}>
        {matches =>
          matches ? (
            <MobileScreen />
          ) : (
            <Provider store={store}>
              <PersistGate
                loading={<div>Loading...</div>}
                persistor={persistor}
              >
                <div className="ui container app__container">
                  <Router history={history}>
                    <Layout>
                      <Switch>
                        <Route path="/" exact component={StartScreen} />
                        <Route path="/options" component={Options} />

                        <Route path="/create" component={QuestionCreate} />
                        <Route path="/review" component={SheetReview} />
                        <Route path="/success" component={Complete} />
                        <Route path="/answers" component={Answers} />
                      </Switch>
                    </Layout>
                  </Router>
                </div>
              </PersistGate>
            </Provider>
          )
        }
      </Media>
    );
  }
}

export default App;
