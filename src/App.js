import './App.css';
import React from 'react';
import MovieList from './MovieList';

const App = () => {
  const movies =  [
    {
      "backgroundImage": "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
      "title": "Avengers: Age of Ultron",
      "year": 2015,
      "actors": [
        "Robert Downey Jr.",
        "Chris Hemsworth",
        "Mark Ruffalo",
        "Chris Evans",
        "Scarlett Johansson",
        "Jeremy Renner",
        "Don Cheadle",
        "Aaron Taylor-Johnson",
        "Elizabeth Olsen",
        "Paul Bettany",
        "Cobie Smulders",
        "Anthony Mackie",
        "Hayley Atwell",
        "Idris Elba",
        "Stellan Skarsgård",
        "James Spader",
        "Samuel L. Jackson"
      ],
      "timing": "2h 21min",
      "type": "Superhero",
      "description": "Avengers: Age of Ultron is a 2015 American superhero film...",
      "share": true,
      "heart": false,
      "message": true
    },
    {
      "backgroundImage": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      "title": "The Avengers",
      "year": 2012,
      "actors": [
        "Robert Downey Jr.",
        "Chris Evans",
        "Chris Hemsworth",
        "Mark Ruffalo",
        "Jeremy Renner",
        "Scarlett Johansson",
        "Tom Hiddleston",
        "Samuel L. Jackson",
        "Stellan Skarsgård",
        "Cobie Smulders",
        "Clark Gregg",
        "Gwyneth Paltrow",
        "Maximiliano Hernández",
        "Paul Bettany",
        "Alexis Denisof",
        "Damion Poitier",
        "Powers Boothe",
        "Jenny Agutter",
        "Stan Lee",
        "Harry Dean Stanton",
        "Jerzy Skolimowski",
        "Warren Kole",
        "Enver Gjokaj"
      ],
      "timing": "2h 23min",
      "type": "Superhero",
      "description": "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film...",
      "share": false,
      "heart": true,
      "message": true
    },
    // Add more movies following the same structure
  ];
  

  return (
    <div className="App">
      <h1>Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
