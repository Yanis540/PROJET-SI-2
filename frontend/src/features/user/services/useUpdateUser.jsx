import { updateUserEndPoint } from "../../../Endpoints/endpoints.js";
import { useRequestFn } from "../../../Hooks/hooks";


const useUpdateUser=({token})=>{
    const endpoint=updateUserEndPoint;
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useUpdateUser;