import { registerUserEndPoint } from "../../../Endpoints/endpoints"
import {useRequestFn} from "../../../Hooks/hooks.js";


const useRegister=()=>{
    const endpoint=registerUserEndPoint;
    const response=useRequestFn({endpoint,options:{method:'POST'}})
    return response 
}   
export default useRegister