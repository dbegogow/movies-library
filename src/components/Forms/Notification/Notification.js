import styles from './Notification.module.css';

const Notification = (props) => {
    const { children, type } = props;

    return (
        <div className={`${styles.container} ${styles[type]}`}>{children}</div>
    );
};

export default Notification;