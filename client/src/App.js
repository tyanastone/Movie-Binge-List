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
import EditUser from '../src/components/EditUser';
import NewMovie from '../src/components/NewMovie';
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
background-image: linear-gradient(#8E0E00, #1F1C18);

height: 300vmax;
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
              <Route exact path='/users/:userId/newMovie' component={NewMovie} />
            {/* <Route exact path="/login" component={LoginPage} /> */}
            <Route exact path="/users/add" component={AddList} />
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
