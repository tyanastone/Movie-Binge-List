import React, { Component } from 'react';
import list from "../Images/list.png";
import styled from 'styled-components';

const hey = styled.div`
background-color: #1C242C;

`
class ListPage extends Component {
    render() {
        return (
            <div>
                <hey>
                <h1>Movies/Show Lists</h1>
                <h3>Want to Watch</h3>
              <div>
                              <img src={list} alt="list" width="800"/>
                              </div>
            <h3>Currently Watching</h3>
                    <h3>Already Watched</h3>
                    </hey>
            </div>
        );
    }
}

export default ListPage;