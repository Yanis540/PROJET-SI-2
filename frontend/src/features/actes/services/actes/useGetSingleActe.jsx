import { getActeUniqueEndPoint } from "../../../../Endpoints/endpoints.js";
import { useRequest } from "../../../../Hooks/hooks";


const useGetSingleActe=({token,numero_acte,type_acte})=>{
    const endpoint=getActeUniqueEndPoint(numero_acte)
    return useRequest({endpoint,token,options:{method:'put',data:{type_acte}}})
}
export default useGetSingleActe;