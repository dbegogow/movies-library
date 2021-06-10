import styles from '../Form.module.css';

const AddMovieForm = () => {
    return (
        <form className={styles.container}>
            <label for="title">Title</label>
            <input className={styles.input} type="text" id="title" name="title" placeholder="Movie Title" />
            <label for="image">Image URL</label>
            <input className={styles.input} type="text" id="image" name="image" placeholder="Movie Image URL" />
            <label for="description">Description</label>
            <input className={styles.input} type="text" id="description" name="description" placeholder="Movie Description" />
            <button className={styles.button}>Add+</button>
        </form>
    );
};

export default AddMovieForm;