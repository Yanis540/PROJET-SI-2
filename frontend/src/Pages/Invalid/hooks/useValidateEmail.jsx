import {useEffect} from 'react'
import { handleValidateUser } from '../../../features/authentification/authentification'
import { toast } from 'react-toastify';

function useValidateEmail(data) {
    const {
        token,
        validateEmail,
        validationResultData,
        dispatch,
    }=data
    useEffect(()=>{
        if(token){
            const validate=async()=>{
                await validateEmail()
            }
            validate()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])
    useEffect(()=>{
        if(validationResultData?.isValid){
            toast.success(validationResultData.message)
            handleValidateUser(dispatch)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[validationResultData?.isValid]);
}

export default useValidateEmail