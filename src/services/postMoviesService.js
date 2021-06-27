import db from '../utils/firebase';

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

    return db.collection("movies").add(newMovie);
};

export const editMovie = async (title, imgUrl, description, id) => {
    return db.collection("movies")
        .doc(id)
        .set({
            title,
            imgUrl,
            description
        });
};