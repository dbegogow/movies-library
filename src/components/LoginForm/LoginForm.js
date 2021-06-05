import styles from './LoginForm.module.css';
import InputField from '../InputField';

const LoginForm = () => {
    return (
        <div className={styles.container}>
            <InputField name="Email" type="text" placeholder="Email" />
            <InputField name="Password" type="password" placeholder="Password" />
            <button className={styles.button}>Login</button>
        </div>
    );
};

export default LoginForm;