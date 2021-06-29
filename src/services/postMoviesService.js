import db from '../utils/firebase';

export const addMovie = async (title, imgUrl, description, creator) => {
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

export const editMovie = async (title, imgUrl, description, _, id) => {
    return db.collection("movies")
        .doc(id)
        .set({
            title,
            imgUrl,
            description
        });
};

export const removeMovie = async (id) => {
    return db.collection("movies")
        .doc(id)
        .delete();
};