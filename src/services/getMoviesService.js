import api from './api';

export const getAllMovies = async () => {
    const res = await fetch(api.paths.allMovies);
    const allMovies = await res.json();

    return Object.entries(allMovies)
        .map(movie => {
            return {
                id: movie[0],
                ...movie[1]
            };
        });
};