import React, { Component } from "react";
import Stars from "./Stars";

class MovieInformation extends Component {
  render() {
    return (
      <div className="MovieInformation">
        <p>{this.props.title}</p>
        <Stars key="star" score={this.props.score} />
      </div>
    );
  }
}

export default MovieInformation;
