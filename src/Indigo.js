import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import App from "./App.js";
//import "./App.css";
//import signUp from "./signUp.js";
//import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

function Indigo() {
  return (
    <Router basename="/INDIGO/">
      <div className="Indigo">
        <header className="Indigo-header">
          <p>INDIGO</p>
        </header>
      </div>

      <NavLink
        to="/app"
        activeClassName="PageSwitcher__Item--Active"
        className="PageSwitcher__Item"
      >
        APP
      </NavLink>
      <Route path="/app" component={App}></Route>
    </Router>
  );
}

export default Indigo;
