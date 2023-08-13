import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '90de9d2b299327a9c8c35cbcca63587d';
export const fetchTrendingMovies = async () => {
  try {
    const data = await axios.get(
      `trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchMoviesDetails = async id => {
  try {
    const data = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US7`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchCast = async id => {
  try {
    const data = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchReviews = async id => {
  try {
    const data = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchMovieByQuery = async query => {
  try {
    const data = await axios.get(
      `search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
