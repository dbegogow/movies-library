import { auth } from '../../../utils/firebase';
import usePresentSuccess from '../../../hooks/usePresentSuccess';
import usePresentError from '../../../hooks/usePresentError';
import styles from '../Form.module.css';
import Notification from '../Notification';

const LoginForm = () => {
    const [presentSuccess, setPresentSuccess] = usePresentSuccess();
    const [presentError, setPresentError] = usePresentError();

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const target = e.target;

        const email = target.email.value;
        const password = target.password.value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                setPresentSuccess(true);
            })
            .catch(() => {
                target.email.value = '';
                target.password.value = '';

                setPresentError(true);
            });
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

            <form className={styles.container} onSubmit={onLoginSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input className={styles.input} type="text" id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" placeholder="Password" />
                <button className={styles.button}>Login</button>
            </form>
        </>
    );
};

export default LoginForm;