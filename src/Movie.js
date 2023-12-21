
import React from 'react';

const Movie = (props) => {
  const { title, subtitle, description,year, actors ,backgroundImage,timing } = props;

  return (
    <div className="movie-card">
      <img src={backgroundImage} className="image" alt={title} />
      <div className="movie-details">
    
        <h2>{title}</h2>
        <div className="up">
        <p>{timing}</p>
        <h4>Actor : {actors[0,2]}</h4>
        </div>
        {/* <h3>{subtitle}</h3> */}
        <p><span>Description :-</span> {description}</p>
        <p><span>Year :- </span>{year}</p>
      </div>
    </div>
  );
};

export default Movie;
