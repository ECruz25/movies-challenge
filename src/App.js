import React, { Component } from "react";
import "./App.css";
import MovieInformation from "./components/MovieInformation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      movieScore: ""
    };
  }

  render() {
    return (
      <div className="App">
        <MovieInformation movie={this.state.movie} key={"ascas1"} />
      </div>
    );
  }
}

export default App;
