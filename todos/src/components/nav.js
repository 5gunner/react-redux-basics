import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => (
  <nav className="navigation" id="navigation">
    <ul>
      <li>
        <NavLink
          activeClassName="active"
          exact
          className="navlinks text-uppercase"
          to={"/"}
        >
          <i className="fa fa-list-alt" /> All Todos
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className="navlinks text-uppercase"
          to={"/addItem"}
        >
          <i className="fa fa-plus" /> Add Todo
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
