import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp  from '../src/components/SignUp'
// import styled from 'styled-components'
import User from '../src/components/UserPage'
import Login from '../src/components/LoginPage'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/login' Component={Login} />
          <Route exact path ='/user' Component={User} />
          <Route exact path ='/signUp' Component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
