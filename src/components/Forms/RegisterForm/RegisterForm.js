import styles from '../Form.module.css';

const RegisterForm = () => {
    return (
        <form className={styles.container}>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type="text" id="email" name="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="Password" />
            <label htmlFor="password">Repeat Password</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="Repeat Password" />
            <button className={styles.button}>Login</button>
        </form>
    );
};

export default RegisterForm;