import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            Movies

            <div>
                <Link to="/login" className={styles.linkButton}>Login</Link>
                <Link to="/register" className={styles.linkButton}>Register</Link>
            </div>
        </div>
    );
};

export default Header;