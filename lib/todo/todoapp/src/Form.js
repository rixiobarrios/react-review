import React, { Component } from "react";

export class Form extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <header>
        <h1>To Do:</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="title" id="" placeholder="Add Todo.." />
          <input
            type="submit"
            value={this.state.title}
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}

export default Form;
