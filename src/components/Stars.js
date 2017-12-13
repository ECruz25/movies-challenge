import React, { Component } from "react";
import StarFull from "material-ui-icons/Star";
import StarEmpty from "material-ui-icons/StarBorder";
import StarHalf from "material-ui-icons/StarHalf";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }
  changeRatingFirstStar() {
    this.setState(() => {
      score: 2;
    });
    console.log(this.state);
  }
  changeRatingSecondStar() {
    console.log(this.state);
  }
  changeRatingThirdStar() {
    console.log(this.state);
  }
  changeRatingFourthStar() {
    console.log(this.state);
  }
  changeRatingFifthStar() {
    console.log(this.state);
  }
  componentWillReceiveProps(nextProps) {
    const score = nextProps.score;
    this.setState(() => ({
      score
    }));
  }

  render() {
    return (
      <div className="Stars">
        {/*Terniary operator to verify which star should be filled*/}
        {this.props.score >= 1 ? (
          this.props.score >= 2 ? (
            <StarFull onClick={this.changeRating} />
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
          this.props.score >= 10 ? (
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
