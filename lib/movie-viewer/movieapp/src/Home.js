import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  console.log("I am Home", props);
  return (
    <div>
      {props.data.movies.map(movie => {
        return (
          <div key={movie.title} className="home">
            <Link
              to={"/show/" + movie.title}
              onClick={() => props.setMovie(movie)}
            >
              <img src={`./images/${movie.poster}`} className="poster" />
              <p>{movie.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
