import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import "normalize.css";
import "./styles/index.scss";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import MuiTheme from "styles/material/MuiTheme";

ReactDOM.render(
   <Router>
      <Provider store={store}>
         <ThemeProvider theme={MuiTheme}>
            <App />
         </ThemeProvider>
      </Provider>
   </Router>,
   document.getElementById("root")
);
