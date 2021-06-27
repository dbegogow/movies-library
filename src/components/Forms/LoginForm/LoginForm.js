import { auth } from '../../../utils/firebase';
import styles from '../Form.module.css';

const LoginForm = () => {
    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
    };

    return (
        <form className={styles.container} onSubmit={onLoginSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type="text" id="email" name="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="Password" />
            <button className={styles.button}>Login</button>
        </form>
    );
};

export default LoginForm;