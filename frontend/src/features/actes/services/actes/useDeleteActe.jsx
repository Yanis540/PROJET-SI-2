import { deleteActeEndPoint } from "../../../../Endpoints/endpoints.js";
import { useRequestFn } from "../../../../Hooks/hooks";


const useDeleteActe=({token,numero_acte})=>{
    const endpoint=deleteActeEndPoint(numero_acte);
    return useRequestFn({endpoint,token,options:{method:'DELETE'}})
}
export default useDeleteActe;