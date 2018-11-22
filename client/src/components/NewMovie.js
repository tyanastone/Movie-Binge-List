import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import NavBar from './NavBar'
import { Button } from 'reactstrap';
import styled from 'styled-components'

const BackgroundColor = styled.div`
background-color: #0A1B0E;
height: 900px;
color: #DBD5C0;    

`

class NewMovie extends Component {
  state = {
    movies: [],
    newMovie: {
      movieId: '',
      image: '',
      name: ''
     
    }
  };

  handleChange = event => {
    console.log("value", event.target.value);
    const updatedNewMovie = { ...this.state.newMovie };
    // event target name wil be either 'username or password'
    console.log(updatedNewMovie)
    updatedNewMovie[event.target.name] = event.target.value;
    this.setState({ newMovie: updatedNewMovie });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.match.params.userId)
    // make post request to our api to create new pikmin

    axios.post(`/api/users/${userId}/movies`, this.state.newMovie)
    //post this new pikmin to this specific user
      .then(res => {
        this.props.history.push(`/users/${userId}`)
      })
      .catch(err => {
        console.log(err);
      });
    // when we get that data back, we need to navigate to the new users page
  };

  getAllMovies = () => {
    axios.get("/api/movies").then(res => {
      this.setState({ users: res.data });
    });
  };

  componentDidMount() {
    this.getAllMovies();
  }

  render() {
    return (
      <BackgroundColor>
      <div>

     

        <h3>Create A New Pikmin! </h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="image">imageUrl: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newMovie.image}
              type="text"
              name="image"
            />
          </div>


          <div>
            <label htmlFor="movieName">New Pikmin's Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newMovie.name}
              type="text"
              name="movieName"
            />
          </div>


        



        



         

          <Button type="submit" color="primary">primary</Button>
    
        
        </form>
        </div>
        </BackgroundColor>
    );
  }
}

export default NewMovie;