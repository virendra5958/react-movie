
import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
