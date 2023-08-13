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
