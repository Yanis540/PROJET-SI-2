import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function useHandleUpdatedRegistre({data,clearForm}) {
    const navigate=useNavigate();

    useEffect(()=>{
        if(data?.message){
            toast.success(data.message);
            clearForm();
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data?.message])
}

export default useHandleUpdatedRegistre