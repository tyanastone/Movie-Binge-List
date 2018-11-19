import React, { Component } from 'react';
import MovieCollage from "../Images/moviecollage.jpg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const ExampleContainer = styled.div`

// `
const Title = styled.h1`
display: flex;
justify-content: center;
/* align-items: center; */

`
const Example = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
h1{
position: absolute;
color: white;
top: 10px;
text-shadow: 2px 2px #B9090B;
/* border: solid white; */
}
 button {
    position: absolute;  
    height: 50px;
    width: 100px;
    font-size: large;
    background-color: #B9090B;
    border: solid white;
    color: white;
   box-shadow: 2px 2px;
  }
`

class HomePage extends Component {
    render() {
        return (
            // <div>
    //    <ExampleContainer>
                <Example>
                {/* this is where log in and sign up buttons will be, and movie collage picture */}
                <Title>
                    <h1>BINGER.IO</h1>
                    </Title>
                <button><Link style={{ textDecoration: 'none' }} to="/login">Log In</Link></button>
              
                <img src={MovieCollage} alt="movies" width="1904"/>
                </Example>  
                // </ExampleContainer> 
        );
    }
}

export default HomePage;