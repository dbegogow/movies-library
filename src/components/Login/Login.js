import styles from './Login.module.css';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    const history = useHistory();
    const { currentUser } = useAuth();

    if (currentUser) {
        history.push('/home');
    }

    return (
        <section className={styles.container} />
    );
};

export default Login;