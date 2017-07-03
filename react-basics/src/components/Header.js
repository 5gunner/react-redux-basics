import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
