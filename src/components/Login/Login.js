import { Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Login.module.css';

const Login = () => {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser
                    ? <Redirect to="/home" />
                    : <section className={styles.container} />
            }
        </>
    );
};

export default Login;