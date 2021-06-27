import { useParams } from "react-router-dom";
import usePresentSuccess from '../../../hooks/usePresentSuccess';
import usePresentError from '../../../hooks/usePresentError';
import styles from '../Form.module.css';
import Notification from '../Notification';

const MovieForm = (props) => {
    const { serviceFunc } = props;
    const { movieId } = useParams();

    const [presentSuccess, setPresentSuccess] = usePresentSuccess();
    const [presentError, setPresentError] = usePresentError();

    const onSubmit = (e) => {
        e.preventDefault();

        const target = e.target;

        const title = target.title.value;
        const imgUrl = target.imgUrl.value;
        const description = target.description.value;

        if (title.length < 3 ||
            !imgUrl ||
            description.length < 10) {
            cleanFormInputs(target);
            setPresentError(true);

            return;
        }

        serviceFunc(title, imgUrl, description, movieId)
            .then(() => {
                setPresentSuccess(true);
            })
            .catch(() => {
                cleanFormInputs(target);
                setPresentError(true);
            });
    };

    const cleanFormInputs = (target) => {
        target.title.value = '';
        target.imgUrl.value = '';
        target.description.value = '';
    };

    return (
        <>
            {
                presentSuccess
                    ? (
                        <Notification type="success">
                            Added Successfuly!
                        </Notification>
                    )
                    : null
            }

            {
                presentError
                    ? (
                        <Notification type="error">
                            Invalid input data!
                        </Notification>
                    )
                    : null
            }

            <form className={styles.container} onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input className={styles.input} type="text" id="title" name="title" placeholder="Movie Title" />
                <label htmlFor="imgUrl">Image URL</label>
                <input className={styles.input} type="text" id="imgUrl" name="imgUrl" placeholder="Movie Image URL" />
                <label htmlFor="description">Description</label>
                <input className={styles.input} type="text" id="description" name="description" placeholder="Movie Description" />
                <button className={styles.button}>Add+</button>
            </form>
        </>
    );
};

export default MovieForm;