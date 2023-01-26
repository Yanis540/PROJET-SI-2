import { updateMaireEndPoint } from "../../../Endpoints/endpoints.js";
import { useRequestFn } from "../../../Hooks/hooks";


const useUpdateMaire=({token})=>{
    const endpoint=updateMaireEndPoint;
    return useRequestFn({endpoint,token,options:{method:'PUT'}})
}
export default useUpdateMaire;