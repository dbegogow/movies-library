import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Article from './Article';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://movies-3dc8a-default-rtdb.firebaseio.com/movies.json")
            .then(res => res.json())
            .then(data => {
                const moviesArr = Object.entries(data)
                    .map(m => {
                        return {
                            key: m[0],
                            ...m[1]
                        };
                    });

                setMovies(moviesArr);
            });
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                All Movies

                <Link to="/home/add-movie" className={styles.addMovieButton}>Add<span>+</span></Link>
            </h2>

            <div className={styles.articlesContainer}>
                <Article
                    title="Home alone"
                    image="https://images-na.ssl-images-amazon.com/images/I/A1T%2BlZ6iUZL._SL1500_.jpg"
                    description="An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
                />
                <Article
                    title="Home alone 2"
                    image="https://ctycms.com/md-pike-district/images/99440320.jpg"
                    description="The film follows Kevin (Culkin), a 10-year-old boy, who once again must fend off two burglars, Harry and Marv (Pesci and Stern), after he is mistakenly separated from his family on their Christmas vacation."
                />

                {
                    movies.map(m => {
                        return (
                            <Article
                                key={m.key}
                                title={m.title}
                                image={m.imgUrl}
                                description={m.description}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;