import styles from './Notification.module.css';

const Notification = (props) => {
    const { type } = props;

    const messages = {
        successful: 'Created successfully!',
        error: 'Invalid inputs!'
    };

    return (
        <div className={`${styles.container} ${styles[type]}`}>{messages[type]}</div>
    );
};

export default Notification;