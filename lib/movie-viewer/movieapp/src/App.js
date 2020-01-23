import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Show from "./Show";
import data from "./data.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Home data={this.state.data} />
        <Show />
      </div>
    );
  }
}

export default App;
