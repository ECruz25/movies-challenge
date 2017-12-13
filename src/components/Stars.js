import React, { Component } from "react";
import Star from "./Star";

class Stars extends Component {
  render() {
    return (
      <div className="Stars">
        {this.props.score}
        <Star key="star-1">Star</Star>
        <Star key="star-2">Star</Star>
        <Star key="star-3">Star</Star>
        <Star key="star-4">Star</Star>
        <Star key="star-5">Star</Star>
      </div>
    );
  }
}

export default Stars;
