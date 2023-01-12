import React from 'react';
import styles from './BackCard.module.css';

const BackCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.bar}></div>
            <div className={styles.content}>
                {props.cvv}
            </div>
        </div>
    );
};

export default BackCard;