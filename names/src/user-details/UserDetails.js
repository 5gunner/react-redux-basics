import React, { Component } from "react";
import { connect } from "react-redux";

export class UserDetails extends Component {
  constructor() {
    super();
  }

  logUser() {
    console.log(this.props.activeTab);
  }

  render() {
    if (this.props.activeTab.selectedUser) {
      return (
        <div className="container">
          <div className="well">
            <img src={this.props.activeTab.selectedUser.thumbnail} alt=""/>
            <p>
              <b>
                <span className="text-uppercase small">Name: </span></b>
                {this.props.activeTab.selectedUser.first} {this.props.activeTab.selectedUser.last}
            </p>
            <p>
              <b>
                <span className="text-uppercase small">age: </span></b>
                {this.props.activeTab.selectedUser.age}
            </p>
            <p>
              <b>
                <span className="text-uppercase small">description: </span></b>
                {this.props.activeTab.selectedUser.description}
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="well">
          <p className="small text-uppercase">select user from above...</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.activeTab);
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.activeTab
  };
}

export default connect(mapStateToProps)(UserDetails);
