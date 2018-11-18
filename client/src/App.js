import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../src/components/Login";
import HomePage from "../src/components/HomePage";
// import styled from 'styled-components'
import UserPage from "../src/components/UserPage";
// import LoginPage from "../src/components/LoginPage";
import Profiles from "../src/components/Profiles";
import ListPage from "../src/components/ListPage";
// import NavBar from "./components/Navbar";
import AddList from '../src/components/AddList';
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Allerta Stencil', sans-serif;
    
  }
`
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Global />
          
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/login" component={LoginPage} /> */}
            <Route exact path="/users/add" component={AddList} />
            <Route exact path="/users/:userId" component={UserPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            
            <Route exact path="/lists" component={ListPage} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
