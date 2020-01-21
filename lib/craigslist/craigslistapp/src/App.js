import React from "react";
import Header from "./Header.js";
import data from "./data.json";

function App() {
  return (
    <Header
      content={
        <div>
          <h1>Craigslist</h1>
          <nav>
            <a href="url">help</a>
            <a href="url">safety</a>
            <a href="url">privacy</a>
            <a href="url">feedback</a>
            <a href="url">terms</a>
            <a href="url">
              <button>Post</button>
            </a>
          </nav>
        </div>
      }
    />
  );
}

export default App;
