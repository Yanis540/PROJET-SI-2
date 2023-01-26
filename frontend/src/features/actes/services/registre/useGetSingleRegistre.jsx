

import { getRegistreUniqueActesEndPoints } from "../../../../Endpoints/endpoints.js";
import { useRequest } from "../../../../Hooks/hooks.js";


const useGetSingleRegistre=({token,numero_registre,type_registre})=>{
    const endpoint=getRegistreUniqueActesEndPoints(numero_registre);
    return useRequest({endpoint,token,options:{method:'PUT',data:{type_registre}}})
}
export default useGetSingleRegistre;