import { useParams } from "react-router-dom";
import styles from '../Form.module.css';
import Notification from '../Notification';
import usePresentFormSuccessNotification from '../../../hooks/usePresentFromSuccessNotification';
import usePresentFormErrorNotification from '../../../hooks/usePresentFormErrorNotification';

const MovieForm = (props) => {
    const { serviceFunc } = props;
    const { movieId } = useParams();

    const [successNotification, setSuccessNotification] = usePresentFormSuccessNotification();
    const [errorNotification, setErrorNotification] = usePresentFormErrorNotification(false);

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
            setErrorNotification(true);

            return;
        }

        serviceFunc(title, imgUrl, description, movieId)
            .then(() => {
                setSuccessNotification(true);
            })
            .catch(() => {
                cleanFormInputs(target);
                setErrorNotification(true);
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
                successNotification
                    ? (
                        <Notification type="success">
                            Added Successfuly!
                        </Notification>
                    )
                    : null
            }

            {
                errorNotification
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