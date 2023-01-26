
import { handleLogout } from '../authentification';
import { INVALID_REFRESH_TOKEN, REFRESH_TOKEN_UNAUTHORIZED } from '../../../ENV/errorTypes';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../../state/StateProvider';
import { useEffect } from 'react';
import { toast } from 'react-toastify';





function useLogoutError({error}) {
    const navigate=useNavigate();
    const [,dispatch]=useStateValue();
    useEffect(()=>{
        if(error){
            toast.error(error.message)
            if(
                error?.cause === INVALID_REFRESH_TOKEN || 
                error?.cause === REFRESH_TOKEN_UNAUTHORIZED 
            ) 
                handleLogout(dispatch,navigate)
            ;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])
  
;
}

export default useLogoutError
