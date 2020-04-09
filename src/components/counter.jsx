import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.createClasses()}>{this.getCount()}</span>
        <button
          onClick={() => this.props.onRegister(this.props.counter)}
          className="btn btn-secondary btn-small"
        >
          Register
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  createClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
