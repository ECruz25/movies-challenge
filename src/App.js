import React, { Component } from "react";
import "./App.css";
import MovieInformation from "./components/MovieInformation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieTitle: "",
      movieScore: "",
      movieId: ""
    };
  }

  componentDidMount() {
    let url = "http://www.theimdbapi.org/api/movie?movie_id=tt0418279";

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(() => ({
          movieTitle: data.title,
          movieScore: data.rating,
          movieId: data.imdb_id
        }));
      });
  }

  render() {
    return (
      <div className="App">
        <MovieInformation
          title={this.state.movieTitle}
          score={this.state.movieScore}
          key={"ascas1"}
        />
      </div>
    );
  }
}

export default App;
