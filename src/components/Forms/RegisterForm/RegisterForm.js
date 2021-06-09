import styles from '../Form.module.css';

const RegisterForm = () => {
    return (
        <form className={styles.container}>
            <label for="email">Email</label>
            <input className={styles.input} type="text" id="email" name="email" placeholder="Email" />
            <label for="password">Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="Password" />
            <label for="password">Repeat Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="Repeat Password" />
            <button className={styles.button}>Login</button>
        </form>
    );
};

export default RegisterForm;