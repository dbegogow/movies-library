import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { addMovie } from '../../../services/postMoviesService';
import styles from '../Form.module.css';

const AddMovieForm = () => {
    const [isFormSubmitted, setIsFormSubmmited] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const target = e.target;

        const title = target.title.value;
        const imgUrl = target.imgUrl.value;
        const description = target.description.value;

        addMovie(title, imgUrl, description)
            .then(() => {
                setIsFormSubmmited(true);
            });
    };

    if (isFormSubmitted) {
        return <Redirect to="/home" />;
    } else {
        return (
            <form className={styles.container} onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input className={styles.input} type="text" id="title" name="title" placeholder="Movie Title" />
                <label htmlFor="imgUrl">Image URL</label>
                <input className={styles.input} type="text" id="imgUrl" name="imgUrl" placeholder="Movie Image URL" />
                <label htmlFor="description">Description</label>
                <input className={styles.input} type="text" id="description" name="description" placeholder="Movie Description" />
                <button className={styles.button}>Add+</button>
            </form>
        );
    }
};

export default AddMovieForm;