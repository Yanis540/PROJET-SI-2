import {useState,useEffect} from 'react'
import {makeRequest} from '../hooks.js';

/**
 * 
 * @param {(url,token,options)}  ({url,token,options}) 
 * @param url : end point  of the server 
 *  @param options : {data,params,method}
 * 
 */
function useRequest({endpoint,token,options}) {
    const [data,setData]=useState(null)
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const fetch=async()=>{
      // params are passed because the get request in axios do not allow to pass body (we will find them in the query object in the backend) 
      setLoading(true);
      const response=await makeRequest({url:endpoint,token,options})
      if(response.data?.error|| response.error){ 
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
    }
    
    useEffect(()=>{
      setError(null)
      setData(null);
      if(endpoint){
        fetch()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[endpoint])
    return {error,data,loading,fetch,setData}
}

export default useRequest