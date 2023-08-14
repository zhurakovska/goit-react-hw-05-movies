import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const SearchForm = ({ setSearchResults }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState(query);

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query).then(res => setSearchResults(res.data.results));
    }
  }, [query, setSearchResults]);

  const onSubmit = e => {
    e.preventDefault();

    setSearchParams(value !== '' ? { query: value } : {});
    if (!query && !value) {
      toast.warning(`not enough information`);
      return;
    } else if (query.toLocaleLowerCase() === value.toLocaleLowerCase()) {
      toast.info(`Please change your request`);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          autoFocus="on"
          type="text"
          name="query"
          placeholder="Enter your movie"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
