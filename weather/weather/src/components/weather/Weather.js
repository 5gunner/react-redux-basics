import React, { Component } from "react";

class Weather extends Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Weather;
