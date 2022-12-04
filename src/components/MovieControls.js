import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <TiDelete />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          {/* <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
          </button> */}
        </>
      )}
    </div>
  );
};

export default MovieControls;
