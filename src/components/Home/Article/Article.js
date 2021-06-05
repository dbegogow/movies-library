import styles from './Article.module.css';

const Article = (props) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{props.title}</h3>
            <img className={styles.image} src={props.image} alt={props.title} />
            <p className={styles.description}>{props.description}</p>
        </div>
    );
};

export default Article;