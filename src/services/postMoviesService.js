import api from './api';

export const addMovie = async (title, imgUrl, description) => {
    const creator = 'dzhulio@abv.bg';
    const likes = 0;

    const newMovie = {
        title,
        imgUrl,
        description,
        creator,
        likes,
    }

    console.log(newMovie);

    return await fetch(api.paths.allMovies,
        { method: api.methods.post, body: JSON.stringify(newMovie) });
};