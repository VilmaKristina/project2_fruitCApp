import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import reducers from "./reducers/index.js";

import { Provider } from "react-redux";
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
