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

    const [error, setError] = useState({
        name:"",
        cardNumber: "",
        date: "",
        cvv: ""
    });

    function handleClick(event){
        event.preventDefault();

        if(!formData.name){
            setError({name: "** Enter name first."});
            return;
        } 
        if(!formData.cardNumber){
            setError({cardNumber: "** Enter card number first."});
            return;
        }
        if(formData.cardNumber.length !== 16){
            setError({cardNumber: "** Enter valid card number."});
            return;
        }
        if(!formData.month || !formData.year){
            setError({date: "** Enter date."});
            return;
        }
        if(formData.month>12 || formData.month<1 || formData.year>99 || formData.year<10){
            setError({date: "** Enter valid date."});
            return;
        }
        if(!formData.cvv){
            setError({cvv: "** Enter cvv"});
            return;
        }
        if(formData.cvv>999 || formData.cvv<100){
            setError({cvv: "** Enter valid cvv"});
            return;
        }

        setError({});

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
                            <div className={styles.errorMessage}>{error.name}</div>
                        </div>

                        <div className={styles.input}>
                            <span className={styles.title}>CARD NUMBER</span><br></br>
                            <input name='cardNumber' onChange={handleChange} className={styles.problem} type="text" size="40" placeholder="e.g. 4231 3425 6453 5463"></input>
                            <div className={styles.errorMessage}>{error.cardNumber}</div>
                        </div>
                        <div className={styles.cardDetails}>
                            <div className={styles.date}>
                                <div>
                                    <div className={styles.input}>
                                        <span className={styles.title}>EXP. DATE (MM/YY)</span><br></br>
                                        <input name='month' onChange={handleChange} className={styles.problem} type="text" size="2" placeholder="MM"></input>
                                        <div className={styles.errorMessage}>{error.date}</div>
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
                                    <div className={styles.errorMessage}>{error.cvv}</div>
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