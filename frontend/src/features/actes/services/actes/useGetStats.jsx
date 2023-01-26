import { getStats } from "../../../../Endpoints/endpoints.js";
import { useRequest } from "../../../../Hooks/hooks";


const useGetStats=({token})=>{
    const endpoint=getStats
    return useRequest({endpoint,token,options:{method:'GET'}})
}
export default useGetStats;