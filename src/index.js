import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App"
import {BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from './Components/ScrollToTop'
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    {/* https://reacttraining.com/react-router/web/guides/scroll-restoration */}
    <ScrollToTop />
    <App />
  </Router>, 
  rootElement
  );


