import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import "normalize.css";
import "./styles/index.scss";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
   <Router>
      <Provider store={store}>
         <App />
      </Provider>
   </Router>,
   document.getElementById("root")
);
