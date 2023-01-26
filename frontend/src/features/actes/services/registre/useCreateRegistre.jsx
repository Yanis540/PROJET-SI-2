import { createRegistreActeEndPoint } from "../../../../Endpoints/endpoints.js";
import { useRequestFn } from "../../../../Hooks/hooks";


const useCreateRegistre=({token})=>{
    const endpoint=createRegistreActeEndPoint;
    return useRequestFn({endpoint,token,options:{method:'POST'}})
}
export default useCreateRegistre;