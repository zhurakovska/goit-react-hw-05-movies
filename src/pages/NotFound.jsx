import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>Page not found :(</h1>
    </div>
  );
};
