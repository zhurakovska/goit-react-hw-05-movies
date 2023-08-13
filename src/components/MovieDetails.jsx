import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/api';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  useEffect(() => {
    fetchMoviesDetails(id).then(res => setMovieInfo(res.data));
  }, [id]);
  const { backdrop_path, vote_average, overview, title, genres } = movieInfo;
  const countRaiting = ((vote_average / 100) * 100).toFixed(2) + '%';

  return (
    <ul>
      <li key={title}>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png`
          }
          alt="{title}"
        />
        <h1>{title}</h1>
        <p>User score: {countRaiting}</p>
        <ul>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Additional information</h2>
        <div>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
        <Outlet />
      </li>
    </ul>
  );
};
