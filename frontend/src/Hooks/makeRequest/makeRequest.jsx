import axios from 'axios' 
import { SERVER_URL } from '../../ENV/base.js'


/**
 * 
 * @param {(url,token,options)}  ({url,token,options}) @param
 *  Function  
 *      Url End_point of the server 
 *  @param options= {data,params,method}
 * 
 */
const makeRequest=async({url,token,options})=>{
    const cancelToken=axios.CancelToken.source();
    try{
        const api=axios.create({
            baseURL:SERVER_URL,
            headers:{
                Authorization:`Bearer ${token}`
            },
            cancelToken:cancelToken.token
        })
        const response=await api(url,options);
        return response;

    }
    catch(err){
        return {data:null,error:{message:err.message,cause:err.cause},loading:false}
    }

}
export default makeRequest