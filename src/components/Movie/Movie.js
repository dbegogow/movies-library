import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovieById } from '../../services/getMoviesService';
import styles from './Movie.module.css';
import Loader from '../Loader';

const Movie = (props) => {
    const [movie, setMovie] = useState(null);

    const id = props.match.params.movieId;

    useEffect(() => {
        getMovieById(id)
            .then(res => setMovie(res));
    }, [id]);

    if (movie === null) {
        return <Loader />;
    }

    return (
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
                    <button className={styles.likeButton}>Like</button>
                    <Link to={`/home/edit-movie/${id}`} className={styles.editButton}>Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;