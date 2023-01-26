import {useEffect} from 'react'
import { toast } from 'react-toastify'

function useError({error}) {
    useEffect(()=>{
     if(error)toast.error(error.message)  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error?.message])
}

export default useError