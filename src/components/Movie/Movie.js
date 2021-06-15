import { useState, useEffect } from 'react';
import styles from './Movie.module.css';

const Movie = (props) => {
    const [id, setId] = useState('');

    useEffect(() => {
        
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.image}
                src="https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                alt=""
            />
            <div className={styles.descriptionContainer}>
                <h1 className={styles.title}>Home Alone</h1>
                <div className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quas beatae architecto nemo suscipit dolores iusto libero numquam voluptate molestiae laborum distinctio recusandae velit, deleniti ducimus itaque? Tempora, optio adipisci?</div>
            </div>
        </div>
    );
};

export default Movie;