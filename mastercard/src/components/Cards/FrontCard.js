import React from 'react';
import styles from './FrontCard.module.css';

const FrontCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.contents}>
                <div className={styles.cardnumber}>
                    2534 6353 2426 9836
                </div>
                <div className={styles.details}>
                    <div>
                        ANKIT PRAKASH
                    </div>
                    <div>
                        06/26
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontCard;