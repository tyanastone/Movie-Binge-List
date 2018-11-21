import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import "../index.css";
import edit from '../Images/edit3.png'
import styled from "styled-components";
// import EditUser from './EditUser';

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
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
        <h1 className="title">Choose Your Profile</h1>
        <StyledCard>
          {this.state.users.map(user => (
            <div className="userContainer">
              <div key={user._id}>
                <Link to={`/users/${user._id}`}>{user.username}</Link>
                <br />
                <img
                  src={user.image}
                  alt=""
                  height="200"
                  width="200"
                  className="profilePic"
                />
                <br />
                {/* <button> */}
                  <Link to={`/users/${user._id}/edit`}><img src={edit} alt="deletebutton" width="50" height="30"/></Link>
                {/* </button> */}
                {/* <img src={deleteButton} alt="deletebutton" width="50" height="30"/> */}
              </div>
            </div>
          ))}
        </StyledCard>
      </div>
    );
  }
}

export default Profiles;
