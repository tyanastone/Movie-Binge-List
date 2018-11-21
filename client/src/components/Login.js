

import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import login from '../Images/login2.png';


// TODO: SHOW ALL USERS
// TODO: CREATE FORM TO CREATE USER

class Login extends Component {
  state = {
    users: [],
    newUser: {
      username: "",
      password: "",
      image: ""
    }
  };

  handleChange = event => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const updatedNewUser = { ...this.state.newUser };
    // event target name wil be either 'username or password'
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ newUser: updatedNewUser });
  };
  handleSubmit = event => {
    event.preventDefault();
    // make post request to our api to create new user
    axios.post("/api/users", this.state.newUser)
      .then(res => {
        this.props.history.push(`/users/${res.data._id}`)
      })
      .catch(err => {
        console.log(err);
      });
    // when we get that data back, we need to navigate to the new users page
  };



  render() {
    return (
      <div>
        <NavBar />
        
        {this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>{user.username}</Link>
          </div>
        ))}

        <h1 className="title">Log In: </h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" style={{color: 'maroon'}}>User Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.username}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password" style={{color: 'maroon'}}>Password: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.password}
              type="password"
              name="password"
            />
            <div>
           <label htmlFor="image" style={{color: 'maroon'}}>User Image: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.image}
              type="text"
              name="image"
              />
              </div>
          </div>
          <button type="submit" className="login"><img src={login} alt="login" className="login" width="100" /></button>
        </form>
      </div>
    );
  }
}

export default Login;
