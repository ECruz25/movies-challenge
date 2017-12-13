import React, { Component } from "react";
import StarFull from "material-ui-icons/Star";
import StarEmpty from "material-ui-icons/StarBorder";
import StarHalf from "material-ui-icons/StarHalf";

class Stars extends Component {
  render() {
    return (
      <div className="Stars">
        {this.props.score >= 1 ? (
          this.props.score >= 2 ? (
            <StarFull />
          ) : (
            <StarHalf />
          )
        ) : (
          <StarEmpty />
        )}
        {this.props.score >= 3 ? (
          this.props.score >= 4 ? (
            <StarFull />
          ) : (
            <StarHalf />
          )
        ) : (
          <StarEmpty />
        )}{" "}
        {this.props.score >= 5 ? (
          this.props.score >= 6 ? (
            <StarFull />
          ) : (
            <StarHalf />
          )
        ) : (
          <StarEmpty />
        )}{" "}
        {this.props.score >= 7 ? (
          this.props.score >= 8 ? (
            <StarFull />
          ) : (
            <StarHalf />
          )
        ) : (
          <StarEmpty />
        )}{" "}
        {this.props.score > 9 ? (
          this.props.score === 10 ? (
            <StarFull />
          ) : (
            <StarHalf />
          )
        ) : (
          <StarEmpty />
        )}
      </div>
    );
  }
}

export default Stars;
