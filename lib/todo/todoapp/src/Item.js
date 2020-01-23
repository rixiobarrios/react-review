import React from "react";
import { Component } from "react";

class Item extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through"
      };
    } else {
      return {
        textDecoration: "none"
      };
    }
  };

  render() {
    return (
      <div>
        <input type="checkbox" />
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
//completed checkmark or link
export default Item;
