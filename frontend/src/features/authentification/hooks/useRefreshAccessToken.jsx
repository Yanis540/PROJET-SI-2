import { useEffect } from "react";
import { refreshAccessTokenEndPoint } from "../../../Endpoints/endpoints"
import { useRequestFn } from "../../../Hooks/hooks.js";


const useRefreshAccessToken=({refreshToken,expiresIn})=>{
    const url=refreshAccessTokenEndPoint;
    const {data,error,loading,execute:refresh}=useRequestFn({endpoint:url,token:refreshToken,options:{method:'GET'}});

    useEffect(()=>{

        if(!refreshToken||!expiresIn ) return ;
        const oneMinuteAndHalfInMs=100*1000 
        //! time To Wait= (Time that expires In -  Current Time ) - (Some Time To get the access Token : examle one minute before )
        let timeToWait=(expiresIn-Date.now())-oneMinuteAndHalfInMs;
        if(timeToWait<=0) timeToWait=1000;
        const timeOut=setInterval(async()=>{
            await refresh();
        },timeToWait)
        return ()=>clearInterval(timeOut);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[expiresIn,refreshToken])


    return {...data,error,loading} 
} 
export default useRefreshAccessToken