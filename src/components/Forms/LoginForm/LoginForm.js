import styles from '../Form.module.css';

const LoginForm = () => {
    return (
        <form className={styles.container}>
            <label for="email">Email</label>
            <input className={styles.input} type="text" id="email" name="email" placeholder="Email" />
            <label for="password">Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="Password" />
            <button className={styles.button}>Login</button>
        </form>
    );
};

export default LoginForm;