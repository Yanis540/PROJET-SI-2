import {useEffect} from 'react'
import { toast } from 'react-toastify'
import { ACTIONS, useStateValue } from '../../../../../../../state/StateProvider';

const {
    SET_USER
}=ACTIONS
function useUpdatedMaire({data,clearForm,}) {
    const [{user},dispatch]=useStateValue();
    useEffect(()=>{
        if(data?.user)
         {
            toast.success(data?.message);
            dispatch({
                type:SET_USER,
                user:{...data.user,accessToken:user?.accessToken,refreshToken:user?.refreshToken,expiresIn:user?.expiresIn}
            })
            clearForm()
         }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])
}

export default useUpdatedMaire