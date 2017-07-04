import React, { Component } from "react";
import { ListItem } from "./listItem";

export class List extends Component {
  render() {
    return (
      <div className="container">
        <ListItem todos={this.props.todos} />
      </div>
    );
  }
}

export default List;
