import React, { Component } from 'react';
import list from "../Images/list2.png";
import list2 from "../Images/list.png"
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
                              <img src={list} alt="list" width="500"/>
                              </div>
                    <h3>Currently Watching</h3>
                    <img src={list2} alt="list" width="500"/>
                    <h3>Already Watched</h3>
                    </hey>
            </div>
        );
    }
}

export default ListPage;