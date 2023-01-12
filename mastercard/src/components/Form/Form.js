import React,{useState} from 'react';
import styles from './Form.module.css';
import FrontCard from '../Cards/FrontCard';
import BackCard from '../Cards/BackCard';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: ""
    });

    const [cardDetails, setCardDetails] = useState({
        name: "Cardholder's name",
        cardNumber: "0000 0000 0000 0000",
        month: "MM",
        year: "YY",
        cvv: "cvv"
    });

    function handleClick(event){
        event.preventDefault();
        setCardDetails(formData);
        toast("Success!!");
    }

    function handleChange(event){
        const currName = event.target.name;
        const val = event.target.value;
        
        setFormData({...formData, [currName]: val});
    }

    return (
        <div className={styles.body}>
            <ToastContainer position="top-center"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark" />
            <div className={styles.left}>
                <FrontCard name={cardDetails.name} number={cardDetails.cardNumber} month={cardDetails.month} year={cardDetails.year} />
                <BackCard cvv={cardDetails.cvv} />
            </div>
            <div className={styles.right}>
                <div className={styles.formContainer}>
                    <form>
                        <div className={styles.input}>
                            <span className={styles.title}>CARDHOLDER NAME</span><br></br>
                            <input name='name' onChange={handleChange} className={styles.problem} type="text" size="40" placeholder="e.g. Ankit Prakash"></input>
                        </div>

                        <div className={styles.input}>
                            <span className={styles.title}>CARD NUMBER</span><br></br>
                            <input name='cardNumber' onChange={handleChange} className={styles.problem} type="text" size="40" placeholder="e.g. 4231 3425 6453 5463"></input>
                        </div>
                        <div className={styles.cardDetails}>
                            <div className={styles.date}>
                                <div>
                                    <div className={styles.input}>
                                        <span className={styles.title}>EXP. DATE (MM/YY)</span><br></br>
                                        <input name='month' onChange={handleChange} className={styles.problem} type="text" size="2" placeholder="MM"></input>
                                    </div>
                                </div>
                                <div className={styles.dater}>
                                    <div className={styles.input}>
                                        <span className={styles.title}></span><br></br>
                                        <input name='year' onChange={handleChange} className={styles.problem} type="text" size="2" placeholder="YY"></input>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.input}>
                                    <span className={styles.title}>CVV</span><br></br>
                                    <input name='cvv' onChange={handleChange} className={styles.problem} type="text" size="5" placeholder="e.g. 423"></input>
                                </div>
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