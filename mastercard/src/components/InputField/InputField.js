import React from 'react';
import styles from './InputField.module.css';

const InputField = (props) => {
    return (
        <div className={styles.input}>
            <span className={styles.title}>{props.label}</span><br></br>
            <input height="40" className={styles.problem} type={props.type} size={props.size} placeholder={props.placeholder} disabled={props.disabled}></input>
        </div>
    );
};

export default InputField;