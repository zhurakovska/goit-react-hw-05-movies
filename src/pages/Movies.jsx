import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';
const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  return (
    <>
      <SearchForm setSearchResults={setSearchResults}></SearchForm>

      <h1>Your search results</h1>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link state={{ location }} to={`${movie.id}`} key={movie.id}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
Movies.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Movies;
