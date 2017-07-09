import React, {Component} from "react"
import { DropdownButton, MenuItem } from "react-bootstrap"


export class ListItem extends Component {
  listItems = () => {
    return this
      .props
      .todos
      .map((todo, i) => {
        return (
          <li key={i} className="form-group">
            <label className="form-control text-capitalize">
              <input
                defaultChecked={todo.completed === true}
                type="checkbox"
                onClick={() => {
                this
                  .props
                  .checkItem(todo.key, todo.completed);
              }}/>{todo.task}
            </label>
            <DropdownButton title="" id="dropdown">
              <MenuItem>Edit</MenuItem>
              <MenuItem divider/>
              <MenuItem
                onClick={() => {
                this.props.removeTodo(todo.key)
              }}>Delete</MenuItem>
            </DropdownButton>
          </li>
        );
      });
  };

  render() {
    return (
      <ul className="list-unstyled todoList">
        {this.listItems()}
      </ul>
    );
  }
}

export default ListItem;
