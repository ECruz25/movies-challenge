import React, { Component } from "react";
import Stars from "./Stars";

class MovieInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.onRateChange = this.onRateChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const score = nextProps.score;
    this.setState(() => ({
      score
    }));
  }

  onRateChange(e) {
    const score = e.target.value;
    this.setState(() => ({ score }));
  }

  render() {
    return (
      <div className="MovieInformation">
        <p>{this.props.title}</p>
        <Stars key="star" score={Math.floor(this.state.score)} />
        <input type="number" max={10} min={0} onChange={this.onRateChange} />
      </div>
    );
  }
}

export default MovieInformation;
