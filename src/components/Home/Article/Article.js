import { Link } from 'react-router-dom';
import styles from './Article.module.css';

const Article = (props) => {
    const { id, title, image, description } = props;

    return (
        <Link to={`/home/movie/${id}`} className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img className={styles.image} src={image} alt={title} />
            <p className={styles.description}>{description}</p>
        </Link>
    );
};

export default Article;