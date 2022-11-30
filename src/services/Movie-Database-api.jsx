import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c0f869c87d748d5d35a5a4a4dbb44054';

export const fetchTrending = async () => {
    try {
        const response = await axios.get(
            `trending/all/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const fetchMovie = async (id) => {
    try {
        const response = await axios.get(
            `movie/${id}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCast = async (id) => {
    try {
        const response = await axios.get(
            `movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        return response.data.cast;
    } catch (error) {
        console.log(error);
    }
}

export const fetchReviews = async (id) => {
    try {
        const response = await axios.get(
            `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
        return response.data.results
    } catch (error) {
        console.log(error);
    }
}

export const fetchMovieByName = async (name) => {
    try {
        const response = await axios.get(
            `search/movie?api_key=${API_KEY}&query=${name}`);
        return response.data.results
    } catch (error) {
        console.log(error);
    }
}