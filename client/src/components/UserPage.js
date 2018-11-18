import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';

// Need info about a user
// Need info about that users ideas

const IdeaStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #f1faee;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  input,
  textarea {
    background-color: transparent;
    border: none;
  }

  input {
    height: 30%;
    font-size: 1.3rem;
  }
  textarea {
    height: 70%;
  }
`

const NewMovieButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`

const IdeasContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

class UserPage extends Component {
  state = {
    user: {},
    movies: []
  }

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({
        user: res.data,
        movies: res.data.movies
      })
    })
  }

  handleCreateNewMovie = () => {
    const userId = this.props.match.params.userId
    const payload = {
      name: 'Movie Title',
        image: 'Movie Image',
      year: 'Movie Year',
      description: 'Movie Description' 
    }
    axios.post(`/api/users/${userId}/movies`, payload).then(res => {
      const newMovie = res.data
      const newStateMovies = [...this.state.movies, newMovie]
      this.setState({ movies: newStateMovies })
    })
  }

//   handleDelete = ideaId => {
//     // some unique value
//     axios.delete(`/api/ideas/${ideaId}`).then(() => {
//       //Remove the idea with ideaID from this.state.ideas
//       const newIdeas = [...this.state.ideas]
//       // Return only ideas that are NOT the id provided
//       const filtered = newIdeas.filter(idea => {
//         return idea._id !== ideaId // ! = =
//       })
//       // Take filtered data and set it to ideas
//       this.setState({ideas: filtered})
//     })
//   }

  handleChange = (event, movieId) => {
    // const name = event.target.name
    // const value = event.target.value
    const { value, name } = event.target
    const newMovies = [...this.state.movies]
    const updatedVals = newMovies.map(movie => {
      if (movie._id === movieId){
        movie[name] = value
      }
      return movie
    }) 

    this.setState({movies: updatedVals})
  }

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
        axios.delete(`http://localhost:3000/api/users/${userId}`)
            .then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }

  render() {
      return (
        
          <div>
              
              <button onClick={this.onDelete.bind(this)}>Delete User</button>
           
              {/* <button onClick={EditUser}>Edit User</button> */}
        <h1>{this.state.user.username}'s Movie Page</h1>
        <NewMovieButton onClick={this.handleCreateNewMovie}>
          New Movie
        </NewMovieButton>
             
        <IdeasContainerStyle>
          {this.state.movies.map(movie => {
            const deleteMovie = () => {
              return this.handleDelete(movie._id)
            }

                      return (
                        
                        <Card>
                        <CardImg top width="100%" src="{movie.image}" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>{movie.name}</CardTitle>
                          
                          <CardText  onBlur={() => this.handleUpdate(movie._id)}
                                  onChange={(event) => this.handleChange(event, movie._id)} 
                                  name="description" 
                                      value={movie.description}>{movie.description}</CardText>
                          <Button>Button</Button>
                        </CardBody>
                      </Card>
            //   <IdeaStyles>
            //     <input 
            //       onBlur={() => this.handleUpdate(movie._id)}
            //       onChange={(event) => this.handleChange(event, movie._id)} 
            //       type="text" name="name" 
            //       value={movie.name} 
            //     />
            //     <textarea 
            //       onBlur={() => this.handleUpdate(movie._id)}
            //       onChange={(event) => this.handleChange(event, movie._id)} 
            //       name="description" 
            //       value={movie.description} 
            //     />
            //     <button onClick={deleteMovie}>X</button>
            //   </IdeaStyles>
                      )
                  })}
                  
              </IdeasContainerStyle>
              
   
    </div>
      
    )
  }
}

export default UserPage