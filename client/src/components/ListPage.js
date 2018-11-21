import React, { Component } from 'react';
import list4 from "../Images/list4.png";
import list2 from '../Images/list2.png';
import list3 from '../Images/list3.png';
import styled from 'styled-components';
import Navbar from './Navbar';

const hey = styled.div`
background-color: #1C242C;

`
class ListPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <hey>
                <h1 className="title">Movies & Show Lists</h1>
                <h3 className="title" style={{color: 'maroon'}}>Want to Watch</h3>
              <div>
                              <img src={list4} alt="list" width="500"/>
                              </div>
                    <h3 className="title" style={{color: 'maroon'}}>Currently Watching</h3>
                    <img src={list2} alt="list" width="500"/>
                    <h3 className="title" style={{color: 'maroon'}}>Already Watched</h3>
                    <img src={list3} alt="list" width="500"/>
                    </hey>
            </div>
        );
    }
}

export default ListPage;