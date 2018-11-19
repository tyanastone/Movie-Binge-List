import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import NavBar from './Navbar';
class Profiles extends Component {
    state = {
      users: [],
      newUser: {
        username: "",
        password: ""
      }
    };
  
    getAllUsers = () => {
      axios.get("/api/users").then(res => {
        this.setState({ users: res.data });
      });
    };
  
    componentDidMount() {
      this.getAllUsers();
    }
  
    render() {
      return (
        <div>
        <NavBar />
          
          {this.state.users.map((user) => (
            <div key={user._id}>
                      <Link to={`/users/${user._id}`}>{user.username}</Link>
                      {/* {user.image} */}
            </div>
          ))}
  
          
        </div>
      );
    }
  }

export default Profiles;