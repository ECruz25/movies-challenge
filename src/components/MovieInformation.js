import React, { Component } from "react";
import Stars from "./Stars";
import TextField from "material-ui/TextField";

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
    const score = e.target.value >= 10 ? 10 : e.target.value;
    this.setState(() => ({ score }));
  }

  render() {
    return (
      <div className="MovieInformation">
        <h1>{this.props.title}</h1>
        <Stars key="star" score={Math.floor(this.state.score)} />
        <TextField
          type="number"
          max={10}
          min={0}
          onChange={this.onRateChange}
        />
      </div>
    );
  }
}

export default MovieInformation;
