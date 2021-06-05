import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <Link to="/home" className={styles.linkButton}><span>Movies</span></Link>
            </div>

            <div>
                <Link to="/login" className={styles.linkButton}><span>Login</span></Link>
                <Link to="/register" className={styles.linkButton}><span>Register</span></Link>
            </div>
        </div>
    );
};

export default Header;