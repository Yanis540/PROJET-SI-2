import { useEffect } from 'react'
import useRefreshAccessToken from './useRefreshAccessToken';
import { ACTIONS } from '../../../state/StateProvider.js';
import { useLogoutError } from '../authentification';



const{
  SET_USER
}=ACTIONS
function useWatchAuth(dispatch,user) {
  const {accessToken,expiresIn,error}= useRefreshAccessToken(user?user:{refreshToken:'',expiresIn:0});
  useLogoutError({error})


  useEffect(()=>{
    if(accessToken){
      dispatch({
        type:SET_USER,
        user:{
          ...user,
          accessToken,
          expiresIn
        }
      })
    }
    return ()=>{}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[accessToken,expiresIn,dispatch])

  return; 
}

export default useWatchAuth