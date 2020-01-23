import React from "react";
import "./Home.css";

function Home(props) {
  console.log("I am Home", props);
  return (
    <div>
      {props.data.movies.map(movie => {
        return (
          <div key={movie.title} className="home">
            <img src={`./images/${movie.poster}`} className="poster" />
            <p>{movie.title}</p>
          </div>
        );
      })}
      <h1>Home</h1>
    </div>
  );
}

export default Home;
