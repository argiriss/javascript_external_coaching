import "./style/main.scss";
import { makeRequest, formatDate } from "./utils";

let inputField = document.querySelector("input.movieInputField");
let yearInputField = document.querySelector("input.yearInputField");
let searchMoviesButton = document.querySelector("button.searchMoviesButton");
let moviesList = document.querySelector(".moviesList");

window.onload = async () => {
  searchMoviesButton.addEventListener("click", function () {
    searchMovies();
  });
};

async function searchMovies() {
  moviesList.innerHTML = "";

  if (inputField.value === "") {
    return false;
  }

  let year = yearInputField.value;
  let title = inputField.value;

  const moviesResults = await makeRequest(
    `${process.env.OMDB_ROUTE_PATH}?apikey=${process.env.OMDB_API_KEY}&s=${title}&y=${year}`
  );

  populateMoviesList(moviesResults);

  clearResults();
}

function populateMoviesList(moviesResults) {
  if (moviesResults.Response === "False") {
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML =
      "<span class='error'>" + moviesResults.Error + "</span>";
    moviesList.appendChild(errorDiv);
  } else {
    let movies = moviesResults.Search;
    for (let movie of movies) {
      let newMovie = document.createElement("li");
      newMovie.className = "searchResult";
      newMovie.setAttribute("data-imdbId", movie.imdbID);
      newMovie.innerHTML =
        "<span class='movieTitle'>" + movie.Title + "</span>";
      newMovie.addEventListener("click", function () {
        displayMovie(movie.imdbID);
      });

      let img = document.createElement("img");
      img.className = "moviePoster";
      img.src = movie.Poster;
      img.alt = movie.Title;
      newMovie.appendChild(img);

      moviesList.appendChild(newMovie);
    }
  }
}

async function displayMovie(imdbID) {
  const movieResults = await makeRequest(
    `${process.env.OMDB_ROUTE_PATH}?apikey=${process.env.OMDB_API_KEY}&i=${imdbID}`
  );

  showMovieInfo(movieResults, imdbID);
}

function showMovieInfo(movieResults, imdbID) {
  let movie = document.querySelector(`[data-imdbID="${imdbID}"]`);
  let movieInfo = document.createElement("div");
  movieInfo.innerHTML = movieResults.Plot;
  movie.appendChild(movieInfo);
}

function clearResults() {
  inputField.value = "";
  inputField.focus();
}
