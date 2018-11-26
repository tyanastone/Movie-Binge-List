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

import EditUser from '../src/components/EditUser';
// import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import './index.css';
// import img from './Images/TexurVol2/Texur-13.jpg'

// const Global = createGlobalStyle`
//  @import url('https://fonts.googleapis.com/css?family=Lobster');
  
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Lobster', cursive;
//     /* background-color: #1C242C */
//   }
// `
const BodyPage = styled.div`
background-image: linear-gradient(#eacda3, #d6ae7b);

height: 400vmax;
`
class App extends Component {
  render() {
    return (
      <BodyPage>
      <Router>
        <div>
        {/* <Global /> */}
          
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/login" component={LoginPage} /> */}
            
            <Route exact path="/users/:userId/edit" component={EditUser} />
            <Route exact path="/users/:userId" component={UserPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            
            
            <Route exact path="/lists" component={ListPage} />
            
          </Switch>
        </div>
        </Router>
         </BodyPage>
        
    );
  }
}

export default App;
