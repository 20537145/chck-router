import React from "react";

import MovieCard from "./MoviesCard";

function MovieList({ movies, search,rate }) {
  return (
    <div className="hola">
      {movies
        .filter((e) =>
          e.title.toLowerCase().includes(search.toLowerCase().trim()) && e.rating >= rate
        )
        .map((e, key) => (
          <MovieCard key={e.id} hello={e} />
        ))}
    </div>
  );
}

export default MovieList;
