import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            Movies

            <div>
                <a href="/login" className={styles.linkButton}>Login</a>
                <a href="/register" className={styles.linkButton}>Register</a>
            </div>
        </div>
    );
};

export default Header;