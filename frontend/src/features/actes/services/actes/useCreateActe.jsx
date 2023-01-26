import { createActesEndPoint } from "../../../../Endpoints/endpoints.js";
import { useRequestFn } from "../../../../Hooks/hooks";


const useCreateActe=({token})=>{
    const endpoint=createActesEndPoint;
    return useRequestFn({endpoint,token,options:{method:'POST'}})
}
export default useCreateActe;