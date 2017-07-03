import React, { Component } from "react";
import Users from "./users/Users";
import UserDetails from "./user-details/UserDetails";
import { Router, Route } from "react-router";
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from "react-router-redux";
import Classes from "./classes/Classes";
import store from "./store";

const newHistory = createHistory();
const history = syncHistoryWithStore(newHistory, store);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Users />
          <UserDetails />
          <Route path="class" component={Classes} />
        </div>
      </Router>
    );
  }
}

export default App;
