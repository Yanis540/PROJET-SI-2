import axios from 'axios';
import {useState} from 'react'
import {makeRequest} from '../hooks.js';


/**
 * UseRequestFn  hook.
 * @param endpoint Server end point .
 * @param token Token For Token.
 * @param options :{data,params,method} .
 * @param options.params Request Params (Query params /?q=something) .
 * @param options.method Request Mehotd .
 */

function useRequestFn({endpoint,token,options}) {
    const [data,setData]=useState(null)
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    /**
     * executes function 
     * @param data : should pass the data that you want in the request.body it needs to be a json  
     * @returns data: {data,error,loading} 
     */
    const execute=async(data={})=>{
        try{
            // if(!endpoint) return ;
            setLoading(true)
            setError(null);
            const response=await makeRequest({url:endpoint,token,options:{...options,data}});
            if(response.data.error|| response.error){ 
                const message=response?.data?.error?response.data.error.message:response.error.message
                const cause=response?.data?.error?response.data.error.cause:response.error.cause;
                setLoading(false)
                return setError({
                    message:message,
                    cause:cause
                })
            }
            setLoading(false)
            setData(response.data)
        }catch(err){
            if(!axios.isCancel(err)){
                setError({message:err.message,cause:err.cause});
                setLoading(false)
            }
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }


    return {error,data,loading,execute,setData,setError,setLoading}
}

export default useRequestFn