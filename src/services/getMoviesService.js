import db from '../utils/firebase';

export const getAllMovies = async () => {
    return db.collection("movies")
        .get()
        .then((querySnapshot) => {
            const data = [];

            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            return data;
        });

};

export const getMovieById = async (id) => {
    return db.collection('movies')
        .doc(id)
        .get()
        .then(doc => {
            return {
                id: id,
                ...doc.data()
            }
        });
};