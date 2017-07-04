import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Nav, NavItem } from "react-bootstrap";
import { selectTab } from "../actions/main";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      active: "tab0"
    };
  }

  componentDidMount() {
    console.log(this.props.users);
  }

  listUsers() {
    return this.props.users.map((user, i) => {
      return (
        <NavItem
          key={i}
          onClick={() => this.props.selectTab(i, user)}
          className={this.props.activeTab.tabNumber === "tab" + i ? "active" : ""}
        >
          {user.first}
        </NavItem>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-header">
          <b className="text-uppercase">User Names</b>
          {" "}
          <br />
          <small>Select users to see details</small>
        </h1>
        <Nav bsStyle="pills">
          {this.listUsers()}
        </Nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    activeTab: state.activeTab
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectTab: selectTab
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Users);
