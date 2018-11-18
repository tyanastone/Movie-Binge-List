import React, { Component } from 'react';
import MovieCollage from "../Images/moviecollage.jpg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const ExampleContainer = styled.div`

// `

const Example = styled.div`
display: flex;
justify-content: center;
align-items: center;

 button {
    position: absolute;
    /* top: 100px; */
    
  }
`
class HomePage extends Component {
    render() {
        return (
            // <div>
    //    <ExampleContainer>
                <Example>
                {/* this is where log in and sign up buttons will be, and movie collage picture */}
                <button><Link to="/signUp">Sign-Up</Link></button>
              
                <img src={MovieCollage} alt="movies" width="1904"/>
                </Example>  
                // </ExampleContainer> 
        );
    }
}

export default HomePage;