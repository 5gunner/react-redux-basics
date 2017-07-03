import React, { Component } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saves from "./components/saves/Saves";
import Home from "./components/home/Home";
import User from "./components/user/User";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <User />
          <Header />
          {this.state.title}
          <Route path="/" exact component={Home} />
          <Route path="/saves" component={Saves} />
        </div>
      </Router>
    );
  }
}

export default App;
