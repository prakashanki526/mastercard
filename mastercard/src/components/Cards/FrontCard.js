import React from 'react';
import styles from './FrontCard.module.css';

const FrontCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.contents}>
                <div className={styles.cardnumber}>
                    {props.number}
                </div>
                <div className={styles.details}>
                    <div>
                        {props.name}
                    </div>
                    <div>
                        {props.month}/{props.year}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontCard;