
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavContainer from "./nav/nav-container";

import Home from "./pages/home";
import Create from "./pages/create";
import Edit from "./pages/edit";
import View from "./pages/view";


export default class App extends Component {
  render() {
    return (
      <div className="container">
      <Router>
        <div>
        <NavContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit} />
            <Route path="/view" component={View} />
          </Switch>
        </div>
      </Router>
  </div>
    );
  }
}