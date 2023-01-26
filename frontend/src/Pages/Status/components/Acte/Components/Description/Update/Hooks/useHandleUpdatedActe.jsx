import {useEffect} from 'react'
import { toast } from 'react-toastify';

function useHandleUpdatedActe({data,clearForm}) {

    useEffect(()=>{
        if(data?.acte){
            toast.success(data.message);
            clearForm();
            window.location.reload();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data?.acte])
}

export default useHandleUpdatedActe