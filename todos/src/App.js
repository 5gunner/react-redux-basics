import React, { Component } from "react";
import logo from "./clipboard.svg";
import "./App.sass";
import { connect } from "react-redux";
import List from "./containers/list";

class App extends Component {
  componentDidMount() {
    console.log(this.props.todos);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SIMPLE <br/>TODOS</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
