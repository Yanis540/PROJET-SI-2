import { validateUserEndPoint } from "../../../Endpoints/endpoints"
import {useRequestFn} from "../../../Hooks/hooks.js";


const useValidateUser=({accessToken,params={}})=>{
    const url=validateUserEndPoint;
    const response=useRequestFn({endpoint:url,token:accessToken,options:{params,method:'GET'}})
    return response 
}   
export default useValidateUser