import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from "./containers/list";
import AddItem from "./containers/addItem";
import Nav from "./components/nav";
import Header from "./components/header";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App col-md-4 col-md-offset-4">
          <Header />
          <Nav />
          <Route path="/addItem" component={AddItem} />
          <Route path="/" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;
