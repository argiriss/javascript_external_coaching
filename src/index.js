import "./style/main.scss";
import { makeRequest, formatDate } from "./utils";

window.onload = async () => {

  let inputField = document.querySelector("input.movieInputField");
  let yearInputField = document.querySelector("input.yearInputField");
  let searchMoviesButton = document.querySelector("button.searchMoviesButton");
  let moviesList = document.querySelector(".moviesList");

  searchMoviesButton.addEventListener("click", searchMovies);

  async function searchMovies(){
    if (inputField.value === "") {
      return false;
    }

    let year = yearInputField.value;
    let title = inputField.value;

    const moviesResults = await makeRequest(
      `${process.env.OMDB_ROUTE_PATH}?apikey=${process.env.OMDB_API_KEY}&s=${title}&y=${year}`
    );
    
    populateMoviesList(moviesResults);
  }

  function populateMoviesList(moviesResults) {
    let movies = moviesResults.Search;
    for (let movie of movies) {
      let newMovie = document.createElement("div");
      newMovie.innerHTML = "<span class='movie-title'>"+movie.Title+"</span>";
      moviesList.appendChild( newMovie );
    }
  }
};