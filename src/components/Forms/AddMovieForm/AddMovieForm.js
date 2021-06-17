import { useState } from 'react';
import { addMovie } from '../../../services/postMoviesService';
import styles from '../Form.module.css';
import Notification from '../Notification';

const AddMovieForm = ({ history }) => {
    const [successNotification, setSuccessNotification] = useState(false);
    const [errorNotification, setErrorNotification] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const target = e.target;

        const title = target.title.value;
        const imgUrl = target.imgUrl.value;
        const description = target.description.value;

        if (!title || !imgUrl || !description) {
            presentErrorNotification(target);
            return;
        }

        addMovie(title, imgUrl, description)
            .then(() => {
                presentSuccessfulNotification();
            })
            .catch(() => {
                presentErrorNotification(target);
            });
    };

    const presentSuccessfulNotification = () => {
        setSuccessNotification(true);

        setTimeout(() => {
            history.push('/home');
        }, 800);
    };

    const presentErrorNotification = ({ title, imgUrl, description }) => {
        setErrorNotification(true);

        setTimeout(() => {
            title.value = '';
            imgUrl.value = '';
            description.value = '';

            setErrorNotification(false);
        }, 800);
    }

    return (
        <>
            {
                successNotification
                    ? <Notification type="successful" />
                    : null
            }

            {
                errorNotification
                    ? <Notification type="error" />
                    : null
            }

            <form className={styles.container} onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input className={styles.input} type="text" id="title" name="title" placeholder="Movie Title" />
                <label htmlFor="imgUrl">Image URL</label>
                <input className={styles.input} type="text" id="imgUrl" name="imgUrl" placeholder="Movie Image URL" />
                <label htmlFor="description">Description</label>
                <input className={styles.input} type="text" id="description" name="description" placeholder="Movie Description" />
                <button className={styles.button}>Add+</button>
            </form>
        </>
    );
};

export default AddMovieForm;