import { sendValidationEmailEndPoint } from "../../../Endpoints/endpoints"
import {useRequestFn} from "../../../Hooks/hooks.js";


const useSendValidationEmail=({accessToken})=>{
    const url=sendValidationEmailEndPoint;
    const response=useRequestFn({endpoint:url,token:accessToken,options:{method:'GET'}})
    return response 
}   
export default useSendValidationEmail