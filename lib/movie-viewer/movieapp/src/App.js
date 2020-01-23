import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Show from "./Show";
import data from "./data.json";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  setMovie = movie => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    return (
      <div>
        <Header />
        <Home data={this.state.data} />
        <main>
          <Switch>
            <Route
              path="/show/:movie"
              render={routerProps => {
                console.log(routerProps);
                return (
                  <Show
                    movie={this.state.selectedMovie}
                    routeMovie={routerProps.match.params.movie}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
