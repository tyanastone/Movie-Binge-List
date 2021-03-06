import React, { Component } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
class EditUser extends Component {
    state = {
        users: [],
        newUser: {
          username: "",
          password: ""
        }
      };
    componentDidMount() {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
          console.log(res.data)
          this.setState({ user: res.data })
        })
      }
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
          const userId = this.props.match.params.userId
        // make post request to our api to create new user
        axios.patch(`/api/users/${userId}`, this.state.newUser)
          .then(res => {
            this.props.history.push(`/profiles`)
          })
          .catch(err => {
            console.log(err);
          });
        // when we get that data back, we need to navigate to the new users page
      };
    render() {
        return (
           
          <div>
             <Navbar />
                <h1 className="title">Edit Your Profile Login</h1>
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
                    </div>
                    <div>
                    <label htmlFor="image" style={{color: 'maroon'}}>User Image: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.image}
              type="text"
              name="image"
            />
                    </div>
          <button type="submit">Edit User</button>
        </form>
            </div>
        );
    }
}

export default EditUser;