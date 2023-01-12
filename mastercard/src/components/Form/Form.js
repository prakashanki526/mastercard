import React from 'react';
import styles from './Form.module.css';
import InputField from '../InputField/InputField';
import FrontCard from '../Cards/FrontCard';
import BackCard from '../Cards/BackCard';

const Form = () => {
    function handleClick(event){
        event.preventDefault();
    }

    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <FrontCard />
                <BackCard />
            </div>
            <div className={styles.right}>
                <div className={styles.formContainer}>
                    <form>
                        <InputField type="text" size="40" label="CARDHOLDER NAME" placeholder="e.g. Ankit Prakash" disabled="" />
                        <InputField type="text" size="40" label="CARD NUMBER" placeholder="e.g.1243 5362 6473 7463" />
                        <div className={styles.cardDetails}>
                            <div className={styles.date}>
                                <div>
                                    <InputField type="text" size="2" label="EXP. DATE (MM/YY)" placeholder="MM" />
                                </div>
                                <div className={styles.dater}>
                                    <InputField type="text" size="2" label="" placeholder="YY" />
                                </div>
                            </div>
                            <div>
                                <InputField type="text" size="5" label="CVV" placeholder="e.g.413" />
                            </div>
                        </div>
                        <button className={styles.btn} onClick={handleClick}>Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;