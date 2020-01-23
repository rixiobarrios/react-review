import React, { Component } from "react";
import Item from "./Item";

export class List extends Component {
  render() {
    let items = this.props.todos.map(todo => (
      <Item key={todo.id} todo={todo} />
    ));
    return <div>{items}</div>;
  }
}

export default List;
