import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import NavBar from './Navbar';
import EditUser from './EditUser';
// import styled from "styled-components";
// import EditUser from './EditUser';


// const StyledCard = styled.div`
// height: 100px;
// width: 100px;
// `
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
                      <img src={user.image} alt=""/>
                      <button ><Link to={`/users/${user._id}/edit`}>Edit User</Link></button>
                      {/* <button><EditUser /></button> */}
            </div>
          ))}
  
          
        </div>
      );
    }
  }

export default Profiles;