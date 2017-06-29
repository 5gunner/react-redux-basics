import React, { Component } from 'react';

class ProjectItems extends Component {
  render() {
    return (
      <div className="projectItems">
        <li>
            <strong>{this.props.project.title}:</strong> {this.props.project.category}
        </li>
      </div>
    );
  }
}

export default ProjectItems;
