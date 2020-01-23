import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Wash the car",
        completed: false
      },
      {
        id: 3,
        title: "Check the mailbox",
        completed: false
      }
    ]
  };

  addTodo = title => {
    const newTodo = {
      id: "",
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="App">
        <Form addTodo={this.addTodo} todos={this.state.todos} />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
