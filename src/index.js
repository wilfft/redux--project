import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import resultsReducer from "./store/reducers/results";
import counterReducer from "./store/reducers/counter";

import { createStore, combineReducers } from "redux";

const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
});
const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
