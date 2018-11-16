import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <form>
          User Name:
          <input type="text" name="firstname" value="" />
          Password:
          <input type="password" name="password" value="" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
