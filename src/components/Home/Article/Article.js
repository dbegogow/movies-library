import styles from './Article.module.css';

const Article = (props) => {
    const { title, image, description } = props;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img className={styles.image} src={image} alt={title} />
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default Article;