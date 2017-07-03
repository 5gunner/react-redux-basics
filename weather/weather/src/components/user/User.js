import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

let selectUser = (user) => {
  console.log("User selected: ", user.first);
  return {
    type: "User_Selected",
    payload: user
  };
};

export class User extends Component {
  displayUsers() {
    return this.props.users.map((user, i) => {
      return (
        <li key={i} onClick={() => this.props.selectUser(user)}>
          {user.first}
        </li>
      );
    });
  }

  render() {
    return <ul>{this.displayUsers()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(User);
