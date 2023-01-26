import {useState} from 'react'
import RegistreActe from './Row/RegistreActe'
import RegistreDescription from './Description/RegistreDescription'
import RegistreHead from './Head/RegistreHead'

import { useParams } from "react-router-dom";
import { useGetSingleRegistre } from "../../../../features/actes/actes"
import { useStateValue } from "../../../../state/StateProvider"
import { useError } from "../../../../Hooks/hooks";
import { Spinner } from "flowbite-react";
import { REGISTRE_NOT_FOUND } from "../../../../ENV/errorTypes";
import NotFound from "../../../NotFound/NotFound";
import { STATUS_ATTRIBUTS } from '../../Types/StatusTypes';
import useFilterRegistres from './Hooks/useFilterActes';


const {
    NUMERO_ACTE
}=STATUS_ATTRIBUTS
function Registre({type_registre}) {
    const [{user}]=useStateValue();
    const [search,setSearch]=useState({
        value:'',
        select:NUMERO_ACTE
    });
    const [filterActes,setFilteredActe]=useState();
    const {id}=useParams();
    const {data,loading,error}=useGetSingleRegistre({token:user?.accessToken,numero_registre:id,type_registre:type_registre});
    const {registre}=data||{};
    useFilterRegistres({data,setFilteredActe,search})
    useError({error});
    if(error&& error?.cause===REGISTRE_NOT_FOUND)return<NotFound/> ;
    return (
        
        <div className="flex flex-col gap-[10px] w-full items-center justify-center overflow-x-auto overflow-y-scroll scrollbar-hide relative shadow-sm sm:rounded-lg dark mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-[700px] duration-150" >
            {
                loading && <Spinner /> 
            }
            {
                !loading&&data&&(
                    <>
                    <h2 className='p-5 rounded-t text-lg font-semibold w-full text-white bg-gray-800 text-center'>Registre Seule ! </h2>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded table  ">
                        <RegistreDescription 
                            registre={registre} 
                            search={search} setSearch={setSearch} 
                        /> 
                        <RegistreHead registre={registre} /> 
                        <tbody >
                            {
                               filterActes?.map((acte)=>(
                                    <RegistreActe key={acte?.num_acte} acte={acte} /> 
                                ))
                            }
                        </tbody>
                    </table>
                    </>
                )
            }
        </div>

    )
}

export default Registre