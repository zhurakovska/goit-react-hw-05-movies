import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'services/api';

export const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(id).then(res => setCast(res.data.cast));
  }, [id]);
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : `https://cdn-icons-png.flaticon.com/512/1425/1425171.png`
              }
              alt={actor.name}
            />
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
