import { SearchForm } from 'components/SearchForm/SearchForm';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      <SearchForm setSearchResults={setSearchResults}></SearchForm>

      <h1>Your search results</h1>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} key={movie.id}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
