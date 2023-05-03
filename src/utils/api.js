import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGY5ZWYzZjMwMWZiMTZmNDhhMjY1YjRiZTkzMzc2MCIsInN1YiI6IjY0NGY0NzY2NjgxODg4MDJlNTdlYjcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aKUl9OvU_kXSZ4UxQIBPSlGphrsFQy3EbNX49mumHwE';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};