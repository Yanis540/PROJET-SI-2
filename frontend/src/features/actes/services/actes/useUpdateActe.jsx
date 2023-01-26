import { updateActeEndPoint } from "../../../../Endpoints/endpoints.js";
import { useRequestFn } from "../../../../Hooks/hooks";


const useUpdateActe=({token,numero_acte})=>{
    const endpoint=updateActeEndPoint(numero_acte);
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useUpdateActe;