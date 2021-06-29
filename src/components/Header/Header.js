import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import usePresentError from '../../hooks/usePresentError';
import styles from './Header.module.css';
import Notification from '../Forms/Notification';

const Header = () => {
    const history = useHistory();
    const { logout, currentUser } = useAuth();
    const [presentError, setPresentError] = usePresentError();

    const onLogoutClickHandler = () => {
        logout()
            .then(() => {
                history.push('/login');
            })
            .catch(() => {
                setPresentError(true);
            })
    };

    return (
        <>
            <div className={styles.container}>
                <div>
                    <Link to="/" className={styles.homeLinkButton}><span>Movies</span></Link>
                </div>

                <div>
                    {
                        currentUser
                            ? <div onClick={onLogoutClickHandler} className={styles.linkButton}><span>Logout</span></div>
                            : (
                                <>
                                    <Link to="/login" className={styles.linkButton}><span>Login</span></Link>
                                    <Link to="/register" className={styles.linkButton}><span>Register</span></Link>
                                </>
                            )
                    }
                </div>
            </div >

            {
                presentError && <Notification type='error'>Error appear when logout!</Notification>
            }
        </>
    );
};

export default Header;