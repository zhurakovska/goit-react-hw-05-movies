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

// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { FcSearch } from 'react-icons/fc';
// import {
//   SearchForm,
//   SearchFormButton,
//   SearchFormInput,
// } from './SearchMovie.styled';
// import { useSearchParams } from 'react-router-dom';
// import { fetchMovieByQuery } from 'services/api';
// import PropTypes from 'prop-types';

// export const SearchMovie = ({ setSearchResults }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';
//   const [value, setValue] = useState(query);

//   useEffect(() => {
//     if (query) {
//       fetchMovieByQuery(query).then(res => setSearchResults(res.data.results));
//     }
//   }, [query, setSearchResults]);

//   const onSubmit = e => {
//     e.preventDefault();

//     setSearchParams(value !== '' ? { query: value } : {});
//     if (!query && !value) {
//       toast.warning(`It is hard to search with such little information`);
//       return;
//     } else if (query.toLocaleLowerCase() === value.toLocaleLowerCase()) {
//       toast.info(`Please change your request`);
//       return;
//     }
//   };

//   return (
//     <>
//       <SearchForm onSubmit={onSubmit}>
//         <SearchFormButton type="submit">
//           <FcSearch style={{ width: '2em', height: '2em' }} />
//         </SearchFormButton>
//         <SearchFormInput
//           value={value}
//           onChange={e => setValue(e.target.value)}
//           name="query"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movies"
//         />
//       </SearchForm>
//     </>
//   );
// };
