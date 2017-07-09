import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addItem} from "../actions/main";

export class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  assignTask = event => {
    this.setState({task: event.target.value});
  };

  addItemFromComponent = event => {
    event.preventDefault();
    this
      .props
      .addItem(this.state.task);
  };

  render() {
    return (
      <form
        id="addNew"
        onSubmit={event => {
        event.preventDefault();
        this
          .props
          .addItem(this.state.task);
      }}>
        <div className="form-group">
          <input
            onChange={this.assignTask}
            className="form-control"
            type="text"
            placeholder="ADD NEW TODO..."/>
        </div>
      </form>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addItem
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(AddItem);
