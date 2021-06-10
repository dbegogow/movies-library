const dbUrl = 'https://movies-3dc8a-default-rtdb.firebaseio.com/movies';

export const getAllMovies = async () => {
    const res = await fetch(`${dbUrl}.json`);
    const allMovies = await res.json();

    return Object.entries(allMovies)
        .map(movie => {
            return {
                key: movie[0],
                ...movie[1]
            };
        });
};