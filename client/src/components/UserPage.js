import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import add from "../Images/addbutton.png";
import deleteButton from "../Images/deletebutton.png";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


// import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import NavBar from "./Navbar";


const StyledCard = styled.div`
  height: 200px;
  width: 300px;
`;
const NewMovieButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`;

const IdeasContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const transparency = styled.button`
color: green;
`
class UserPage extends Component {
  state = {
    user: {},
    movies: [],
    dropdownOpen: false,
    popoverOpen: false
  };
 

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  // }
  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data);
      this.setState({
        user: res.data,
        movies: res.data.movies
      });
    });
  }

  handleCreateNewMovie = () => {
    const userId = this.props.match.params.userId;
    const payload = {
      name: "Movie Title",
      image: "Movie Image",
      year: "Movie Year",
      description: "Movie Description"
    };
    axios.post(`/api/users/${userId}/movies`, payload).then(res => {
      const newMovie = res.data;
      const newStateMovies = [...this.state.movies, newMovie];
      this.setState({ movies: newStateMovies });
    });
  };

  handleDelete = movieId => {
    // some unique value
    axios.delete(`/api/movie/${movieId}`).then(() => {
      //Remove the idea with ideaID from this.state.ideas
      const newMovies = [...this.state.movies];
      // Return only ideas that are NOT the id provided
      const filtered = newMovies.filter(movie => {
        return movie._id !== movieId; // ! = =
      });
      // Take filtered data and set it to ideas
      this.setState({ movies: filtered });
    });
  };

  handleChange = (event, movieId) => {
    // const name = event.target.name
    // const value = event.target.value
    const { value, name } = event.target;
    const newMovies = [...this.state.movies];
    const updatedVals = newMovies.map(movie => {
      if (movie._id === movieId) {
        movie[name] = value;
      }
      return movie;
    });

    this.setState({ movies: updatedVals });
  };

  //   handleUpdate = (userId) => {
  //     // Find the individual updated idea from this.state.ideas
  //     const userToUpdate = this.state.users.find(user => {
  //       return user._id === userId
  //     })
  //     // axios post the endpoint with updated data
  //     axios.patch(`/api/users/${userId}`, userToUpdate).then(() => {
  //       console.log("Updated User")
  //     })
  //     // console .log saved
  //   }
  onDelete() {
    let userId = this.state.user._id;
    axios
      .delete(`http://localhost:3000/api/users/${userId}`)
      .then(response => {
        this.props.history.push("/profiles");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <button onClick={this.onDelete.bind(this)}>Delete User</button>

        {/* <button onClick={EditUser}>Edit User</button> */}
        <h1>{this.state.user.username}'s Movie Page</h1>
        <NewMovieButton onClick={this.handleCreateNewMovie}>
          New Movie
        </NewMovieButton>

        <IdeasContainerStyle>
          {this.state.movies.map(movie => {
            const deleteMovie = () => {
              return this.handleDelete(movie._id);
            };

            return (
              <div>
       

  
            <transparency>    
        <Button id="Popover1" onClick={this.toggle}>
        <img width="300" height="300" src={movie.image} alt="Card image cap" />
                  </Button>
                  </transparency>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>{movie.name}</PopoverHeader>
                  <PopoverBody>{movie.description}</PopoverBody>
        </Popover>
      
              </div>
            );
          })}
        </IdeasContainerStyle>
      </div>
    );
  }
}

export default UserPage;
