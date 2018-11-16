import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
        <div>
            <h1>Log In Page</h1>
        <form>
          User Name:
          <input type="text" name="firstname" value=""></input>
          Password:
          <input type="password" name="password" value=""></input>
          <input type="submit" value="Submit" ></input>
        </form>
            
      </div>
    );
  }
}

export default LoginPage;
