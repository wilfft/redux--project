import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import resultsReducer from "./store/reducers/results";
import counterReducer from "./store/reducers/counter";

import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[MIDDLEWARE} BEFORE NEXT");
      const result = next(action);
      console.log("[MIDDLEWARE} AFTER NEXT");
      return result;
    };
  };
};
const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
