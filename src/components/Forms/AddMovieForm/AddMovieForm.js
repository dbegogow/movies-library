import { addMovie } from '../../../services/postMoviesService';
import styles from '../Form.module.css';

const AddMovieForm = ({ history }) => {

    const onSubmit = (e) => {
        e.preventDefault();

        const target = e.target;

        const title = target.title.value;
        const imgUrl = target.imgUrl.value;
        const description = target.description.value;

        addMovie(title, imgUrl, description)
            .then(() => {
                history.push('/home');
            });
    };

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input className={styles.input} type="text" id="title" name="title" placeholder="Movie Title" />
            <label htmlFor="imgUrl">Image URL</label>
            <input className={styles.input} type="text" id="imgUrl" name="imgUrl" placeholder="Movie Image URL" />
            <label htmlFor="description">Description</label>
            <input className={styles.input} type="text" id="description" name="description" placeholder="Movie Description" />
            <button className={styles.button}>Add+</button>
        </form>
    );
};

export default AddMovieForm;