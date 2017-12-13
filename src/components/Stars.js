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
    this.changeRatingFirstStar = this.changeRatingFirstStar.bind(this);
    this.changeRatingSecondStar = this.changeRatingSecondStar.bind(this);
    this.changeRatingThirdStar = this.changeRatingThirdStar.bind(this);
    this.changeRatingFourthStar = this.changeRatingFourthStar.bind(this);
    this.changeRatingFifthStar = this.changeRatingFifthStar.bind(this);
  }
  changeRatingFirstStar() {
    this.setState(() => ({
      score: 2
    }));
  }
  changeRatingSecondStar() {
    this.setState(() => ({
      score: 4
    }));
  }
  changeRatingThirdStar() {
    this.setState(() => ({
      score: 6
    }));
  }
  changeRatingFourthStar() {
    this.setState(() => ({
      score: 8
    }));
  }
  changeRatingFifthStar() {
    this.setState(() => ({
      score: 10
    }));
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
        {this.state.score >= 1 ? (
          this.state.score >= 2 ? (
            <StarFull onClick={this.changeRatingFirstStar} />
          ) : (
            <StarHalf onClick={this.changeRatingFirstStar} />
          )
        ) : (
          <StarEmpty onClick={this.changeRatingFirstStar} />
        )}
        {this.state.score >= 3 ? (
          this.state.score >= 4 ? (
            <StarFull onClick={this.changeRatingSecondStar} />
          ) : (
            <StarHalf onClick={this.changeRatingSecondStar} />
          )
        ) : (
          <StarEmpty onClick={this.changeRatingSecondStar} />
        )}{" "}
        {this.state.score >= 5 ? (
          this.state.score >= 6 ? (
            <StarFull onClick={this.changeRatingThirdStar} />
          ) : (
            <StarHalf onClick={this.changeRatingThirdStar} />
          )
        ) : (
          <StarEmpty onClick={this.changeRatingThirdStar} />
        )}{" "}
        {this.state.score >= 7 ? (
          this.state.score >= 8 ? (
            <StarFull onClick={this.changeRatingFourthStar} />
          ) : (
            <StarHalf onClick={this.changeRatingFourthStar} />
          )
        ) : (
          <StarEmpty onClick={this.changeRatingFourthStar} />
        )}{" "}
        {this.state.score > 9 ? (
          this.state.score >= 10 ? (
            <StarFull onClick={this.changeRatingFifthStar} />
          ) : (
            <StarHalf onClick={this.changeRatingFifthStar} />
          )
        ) : (
          <StarEmpty onClick={this.changeRatingFifthStar} />
        )}
      </div>
    );
  }
}

export default Stars;
