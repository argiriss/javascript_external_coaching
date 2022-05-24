import "./style/main.scss";
import { makeRequest, formatDate } from "./utils";

window.onload = async () => {
  debugger;
  const movieResults = await makeRequest(
    `${process.env.OMDB_ROUTE_PATH}?apikey=${process.env.OMDB_API_KEY}&s=mat&y=2021`
  );

  console.log(movieResults);
};
