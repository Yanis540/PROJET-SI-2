import { getActesParCategoryEndPoint } from "../../../../Endpoints/endpoints.js";
import { useRequest } from "../../../../Hooks/hooks";


const useGetActesByCategory=({token,type_acte})=>{
    const endpoint=getActesParCategoryEndPoint
    return useRequest({endpoint,token,options:{method:'PUT',data:{type_acte}}})
}
export default useGetActesByCategory;