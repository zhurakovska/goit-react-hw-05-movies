import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(res => setMovies(res.data.results));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link state={{ location }} to={`movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
