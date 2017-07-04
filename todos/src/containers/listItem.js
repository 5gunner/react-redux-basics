import React, { Component } from "react";

export class ListItem extends Component {
  listItems = () => {
    return this.props.todos.map(todo => {
      return todo.task;
    });
  };
  render() {
    return (
      <div>
        {this.listItems()}
      </div>
    );
  }
}

export default ListItem;
