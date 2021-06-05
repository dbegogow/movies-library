import styles from './InputField.module.css';

const InputField = (props) => {
    return (
        <div className={styles.container}>
            <div>{props.name}</div>
            <input className={styles.field} type={props.type} placeholder={props.placeholder} />
        </div>
    );
};

export default InputField;