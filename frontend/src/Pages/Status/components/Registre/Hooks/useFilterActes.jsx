import {useEffect} from 'react'
import {STATUS_ATTRIBUTS} from '../../../Types/StatusTypes'

const{
    DATE,
    LIEU
}=STATUS_ATTRIBUTS
function useFilterRegistres({data,setFilteredActe,search}) {

    useEffect(()=>{
        if(!search?.value) 
            if(data)
                setFilteredActe(data.registre.actes);
        if(search?.value)

            if(data?.registre?.actes)
                setFilteredActe(data.registre?.actes?.filter(acte=>(
                    search.select===DATE? (
                        acte?.date?.toLowerCase().match(search.value?.toLowerCase())
                    ):(
                        search.select===LIEU?(
                            acte?.lieu?.toLowerCase().match(search.value?.toLowerCase())
                        ):(
                            acte?.num_acte?.toLowerCase().match(search.value?.toLowerCase())
                        )
                    )
                )));
        return ()=>{}
             
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search?.value,search?.select,data])
}

export default useFilterRegistres