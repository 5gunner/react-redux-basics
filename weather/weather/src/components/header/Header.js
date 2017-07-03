import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to={"/saves"} activeClassName="active">Your Cities</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Search</NavLink>
              </li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
