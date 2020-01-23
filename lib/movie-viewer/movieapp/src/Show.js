import React from "react";

function Show(props) {
  console.log("I am Show", props);
  return (
    <div className="show">
      <h1>{this.props.movie}</h1>
    </div>
  );
}

export default Show;
