import React, { Component } from "react";
import Stars from "./Stars";

class MovieInformation extends Component {
  render() {
    return (
      <div className="MovieInformation">
        <p>{this.props.movie}</p>
        <Stars key="star" score={this.props.movie} />
      </div>
    );
  }
}

export default MovieInformation;
