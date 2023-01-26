import {useEffect} from 'react'
import { toast } from 'react-toastify'
import { handleLogin } from '../../../features/authentification/authentification'

function useHandleLogin({error,data,dispatch,setForm}) {
    useEffect(()=>{
        if(error) toast.error(error.message)
      },[error])
    useEffect(()=>{
        if(data?.user){
            handleLogin({data,dispatch,setForm})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data,dispatch])
      
}

export default useHandleLogin