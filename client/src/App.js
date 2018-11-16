import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../src/components/SignUp";
// import styled from 'styled-components'
import UserPage from "../src/components/UserPage";
import LoginPage from "../src/components/LoginPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>hello world</h1>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/signUp" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
