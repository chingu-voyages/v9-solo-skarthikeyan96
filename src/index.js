import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: [],
      currentPage: 1,
      loading : false
    };
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${
      this.state.currentPage
      }`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          movieDetails: data.results,
          loading : false
        });
      });
  }
  render() {
    return (
      <div className="App">
        {(this.state.loading || this.state.movieDetails.length === 0) ? <>... Loading </> : <Main movie={this.state.movieDetails}/>}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
