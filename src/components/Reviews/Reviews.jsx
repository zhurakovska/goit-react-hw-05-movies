import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews(id).then(res => setReviews(res.data.results));
  }, [id]);
  return (
    <>
      <ul>
        {reviews.length > 0
          ? reviews.map(review => (
              <li key={review.id}>
                <h2>
                  Review Autor: <span>{review.author}</span>
                </h2>
                <p>{review.content}</p>
              </li>
            ))
          : 'We do not have any reviews for this movie'}
      </ul>
    </>
  );
};

export default Reviews;
