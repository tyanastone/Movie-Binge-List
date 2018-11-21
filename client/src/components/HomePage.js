import React, { Component } from 'react';
import MovieCollage from "../Images/moviecollage.jpg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';



// const Title = styled.h1`
// display: flex;
// justify-content: center;
// /* align-items: center; */

// `;
const Example = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
/* background-image: url(${MovieCollage});
background-size: cover; */
h1{
position: absolute;
color: #ffff9e;
font-size: 100px;
top: 10px;
text-shadow: 2px 2px black;
font-family: 'Monoton', cursive;
/* border: solid white; */
}
/* h2{
    position: absolute;
    color: white;
} */
 /* button {
    position: absolute;  
    height: 50px;
    width: 100px;
    font-size: large;
    background-color: #B9090B;
    border: solid white;
    color: white;
   box-shadow: 2px 2px;
  } */
`;

class HomePage extends Component {
    render() {
        return (
            
            
                <Example>
            
                
                    
                   
                {/* <button><Link style={{ textDecoration: 'none' }} to="/login">Log In</Link></button> */}
                <img src={MovieCollage} alt="movies" width="1930" className="movieImage" />
                
                <div className="wordContainer">
                <div className="content">
        <div className="static">
            <p>My</p>
            <ul>
                <li>Movies</li>
                <li>Shows</li>
                <li>Lists</li>
            </ul>
        </div>
    </div>
                </div>
                <div className="buttonContainer">
                    <div className="wrapper">
                        <div className="clip-text">
                            {/* <h1>Login&raquo;</h1> */}
                       
                            <Link to="/login" style={{textDecoration: 'none', color: '#ffff9e'}}>
                            Log In&raquo;</Link>   
            </div>
                    </div>
                </div>
                <h1 className="homeTitle">BINGER.IO</h1>
            </Example>  
         
             
        );
    }
}

export default HomePage;