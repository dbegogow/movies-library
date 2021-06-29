import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import usePresentSuccess from '../../hooks/usePresentSuccess';
import usePresentError from '../../hooks/usePresentError';
import { getMovieById } from '../../services/getMoviesService';
import { removeMovie } from '../../services/postMoviesService';
import styles from './Movie.module.css';
import Loader from '../Loader';
import Notification from '../Forms/Notification';

const Movie = (props) => {
    const { currentUser } = useAuth();
    const [movie, setMovie] = useState(null);
    const [presentSuccess, setPresentSuccess] = usePresentSuccess();
    const [presentError, setPresentError] = usePresentError();

    const id = props.match.params.movieId;

    useEffect(() => {
        getMovieById(id)
            .then(res => setMovie(res));
    }, [id]);

    const onRemoveClickHandler = () => {
        removeMovie(id)
            .then(() => {
                setPresentSuccess(true);
            })
            .catch(() => {
                setPresentError(true);
            });
    };

    if (movie === null) {
        return <Loader />;
    }

    return (
        <>
            {presentSuccess && <Notification type="success">Removed Successfuly</Notification>}
            {presentError && <Notification type="error">Error when removing movie! Try again!</Notification>}

            <div className={styles.container}>
                <img className={styles.image}
                    src={movie.imgUrl}
                    alt=""
                />
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <div className={styles.aboutMovie}>
                        <div className={styles.description}>{movie.description}</div>
                        <div className={styles.creator}><span>Added by:</span> {movie.creator}</div>
                        {
                            currentUser.email === movie.creator
                                ? (
                                    <div className={styles.creatorButtonsContainer}>
                                        <Link to={`/home/edit-movie/${id}`} className={styles.editButton}>Edit</Link>
                                        <button className={styles.removeButton} onClick={onRemoveClickHandler}>Remove</button>
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie;