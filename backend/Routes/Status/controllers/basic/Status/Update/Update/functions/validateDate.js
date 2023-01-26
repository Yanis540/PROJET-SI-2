
import moment from 'moment';

const validateDate=(date)=>{
    try{
        if(!moment(date,true).isValid()) throw new Error()
    }
    catch(err){
        throw new Error("Invalid Date");
    }

}

export default validateDate;