import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../src/components/SignUp";
import HomePage from "../src/components/HomePage";
// import styled from 'styled-components'
import UserPage from "../src/components/UserPage";
import LoginPage from "../src/components/LoginPage";
import Profiles from "../src/components/Profiles";
import ListPage from "../src/components/ListPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* add nav bar here */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/lists" component={ListPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
