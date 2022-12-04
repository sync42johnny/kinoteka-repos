import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
  useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="controls">
          <Button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ResultCard;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  vertical-align: middle;
  display: inline-block;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
