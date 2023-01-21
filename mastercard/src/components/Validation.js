export default async function Validation(formData){
    var object = {
        name:"",
        cardNumber: "",
        date: "",
        cvv: ""
    }

    if(!formData.name){
        object = {
            name:"** Enter name first",
            cardNumber: "",
            date: "",
            cvv: ""
        };
    } 
    else if(!formData.cardNumber){
        object = {
            name:"",
            cardNumber: "** Enter card number first",
            date: "",
            cvv: ""
        }
    }
    else if(!formData.month || !formData.year){
        object = {
            name:"",
            cardNumber: "",
            date: "** Enter date first.",
            cvv: ""
        }
    }
    else if(!formData.cvv){
        object = {
            name:"",
            cardNumber: "",
            date: "",
            cvv: "** Enter cvv first."
        }
    }

    return object;
}