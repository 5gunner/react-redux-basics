import React, { Component } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { User } from './components/User';
import Geosuggest from 'react-geosuggest';

class App extends Component {
  let something: number;
  constructor() {
    super();
    this.state = {
      title: 'Home'
    }
  }

  titleChange(newTitle) {
    this.setState({
      title: newTitle
    })
  }

  logLocation(suggestion) {
    console.log(suggestion);
  }

  render() {
    return (
        <Router>
         <div>
            <Header />
            <Route path="/user" component={User}></Route>
         </div>
        </Router>
    );
  }
}

export default App;
