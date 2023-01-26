import {useEffect} from 'react'
import { toast } from 'react-toastify';

function useEmailSent(data) {
    const {
        sendValidationData,
    }=data

    useEffect(()=>{
        if(sendValidationData) toast.success(sendValidationData.message)  

    },[sendValidationData])


}

export default useEmailSent