import styles from './Home.module.css';
import Article from './Article';

const Home = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>All movies</h2>

            <div className={styles.articlesContainer}>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    );
};

export default Home;