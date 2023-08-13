import React from 'react';
import { fetchMovieByQuery } from 'services/api';
import { useState } from 'react';
import { useEffect } from 'react';
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
      toast.warning(`It is hard to search with such little information`);
      return;
    } else if (query.toLocaleLowerCase() === value.toLocaleLowerCase()) {
      toast.info(`Please change your request`);
      return;
    }
  };

  return (
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
  );
};
