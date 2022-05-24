import "./style/main.scss";
import { makeRequest, formatDate } from "./utils";

window.onload = async () => {

  let inputField = document.querySelector("input.movieInputField");
  let yearInputField = document.querySelector("input.yearInputField");
  let searchMoviesButton = document.querySelector("button.searchMoviesButton");
  let moviesList = document.querySelector(".moviesList");

  searchMoviesButton.addEventListener("click", searchMovies);

  async function searchMovies(){
    moviesList.innerHTML = "";

    if (inputField.value === "") {
      return false;
    }

    let year = yearInputField.value;
    let title = inputField.value;

    const moviesResults = await makeRequest(
      `${process.env.OMDB_ROUTE_PATH}?apikey=${process.env.OMDB_API_KEY}&s=${title}&y=${year}`
    );
    console.log(moviesResults)


    populateMoviesList(moviesResults);

    
    clearResults();
  }

  function populateMoviesList(moviesResults) {
    if (moviesResults.Response === "False")
    {
      let errorDiv = document.createElement("div");
      errorDiv.innerHTML = "<span class='error'>" + moviesResults.Error + "</span>";
      moviesList.appendChild( errorDiv );
    }
    else
    {
      let movies = moviesResults.Search;
      for (let movie of movies) {
        let newMovie = document.createElement("div");
        newMovie.innerHTML = "<span class='movie-title'>" + movie.Title + "</span>";
        moviesList.appendChild( newMovie );
      }
    }
  }

  function clearResults() {
    inputField.value = "";
    inputField.focus();
  }
};