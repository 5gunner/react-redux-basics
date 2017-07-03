import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Saves extends Component {
  backToHome() {
    this.props.history.push("/")
  }
  constructor(props) {
    super();
    this.state = { someKey: "someValue" };
    console.log(props);
  }

  render() {
    return (
      <div className="container">
        <p>Your Saves</p>
        <button className="btn btn-primary" onClick={() => this.backToHome()}>
          Home
        </button>
      </div>
    );
  }
}

export default Saves;
