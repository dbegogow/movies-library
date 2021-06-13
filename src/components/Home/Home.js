import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../services/getMoviesService';
import styles from './Home.module.css';
import Article from './Article';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then(res => setMovies(res));
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                All Movies

                <Link to="/home/add-movie" className={styles.addMovieButton}>Add<span>+</span></Link>
            </h2>

            <div className={styles.articlesContainer}>
                {
                    movies.map(movie => {
                        return (
                            <Article
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                image={movie.imgUrl}
                                description={movie.description}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;