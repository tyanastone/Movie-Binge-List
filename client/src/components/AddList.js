import React, { Component } from 'react';
import axios from 'axios'
// import {Link} from 'react-router-dom'

class AddList extends Component {
    addList(newList) {
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/users/:userId/movies',
            data: newList
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }
    onSubmit(e) {
        const newList = {
            name: this.refs.name.value
        }
        this.addList(newList)
        e.preventDefault()
        
    }
    render() {
        return (
            <div>
                <h1>Add List</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                        <input type="submit" value="Save" className="btn"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddList;