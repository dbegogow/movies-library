import { useState, useEffect } from 'react';
import { getMovieById } from '../../services/getMoviesService';
import styles from './Movie.module.css';

const Movie = (props) => {
    const [movie, setMovie] = useState({});

    const id = props.match.params.movieId;

    useEffect(() => {
        getMovieById(id)
            .then(res => setMovie(res));
    }, [id]);

    return (
        <div className={styles.container}>
            <img className={styles.image}
                src={movie.imgUrl}
                alt=""
            />
            <div className={styles.descriptionContainer}>
                <h1 className={styles.title}>{movie.title}</h1>
                <div className={styles.description}>{movie.description}</div>
            </div>
        </div>
    );
};

export default Movie;