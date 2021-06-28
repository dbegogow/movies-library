import { useAuth } from '../../../contexts/AuthContext';
import usePresentSuccess from '../../../hooks/usePresentSuccess';
import usePresentError from '../../../hooks/usePresentError';
import styles from '../Form.module.css';
import Notification from '../Notification';

const RegisterForm = () => {
    const { singup } = useAuth();
    const [presentSuccess, setPresentSuccess] = usePresentSuccess();
    const [presentError, setPresentError] = usePresentError();

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const target = e.target;

        const email = target.email.value;
        const password = target.password.value;
        const repeatPassword = target.repeatPassword.value;

        if (email === '' ||
            password !== repeatPassword) {
            cleanFormInputs(target);
            setPresentError(true);

            return;
        }

        singup(email, password)
            .then(() => {
                setPresentSuccess(true);
            })
            .catch(() => {
                cleanFormInputs(target);
                setPresentSuccess(true);
            });
    };

    const cleanFormInputs = (target) => {
        console.log(target);
        target.email.value = '';
        target.password.value = '';
        target.repeatPassword.value = '';
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

            <form className={styles.container} onSubmit={onRegisterSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" placeholder="Password" />
                <label htmlFor="repeat-password">Repeat Password</label>
                <input className={styles.input} type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat Password" />
                <button className={styles.button}>Login</button>
            </form>
        </>
    );
};

export default RegisterForm;