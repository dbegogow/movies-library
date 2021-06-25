const dbUrl = 'https://movies-3dc8a-default-rtdb.firebaseio.com/movies';

const api = {
    paths: {
        allMovies: `${dbUrl}.json`,
        movieById: `${dbUrl}/`
    },
    methods: {
        post: 'POST',
        patch: 'PATCH'
    }
}

export default api;