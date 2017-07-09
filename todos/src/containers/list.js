import React, {Component} from "react";
import {ListItem} from "./listItem";
import {connect} from "react-redux";
import {checkItem} from "../actions/main";
import {bindActionCreators} from "redux";
import {getFirebase, getCurrentLocation} from "../actions/main";
import {removeTodo} from "../actions/main"

export class List extends Component {
  componentWillMount() {
    this
      .props
      .getFirebase();
  }

  componentDidMount() {
    this
      .props
      .getCurrentLocation(this.props.location)
  }

  render() {
    return (
      <div>
        <ListItem
          todos={this.props.todos}
          checkItem={this.props.checkItem}
          removeTodo={this.props.removeTodo}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {todos: state.todos, routing: state.routing};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    checkItem,
    getFirebase,
    getCurrentLocation,
    removeTodo
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(List);
