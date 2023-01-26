import {useEffect} from 'react'

function useFilterRegistres({data,setRegistresFiltre,search}) {

    useEffect(()=>{
        if(!search) 
            if(data)
                setRegistresFiltre(data.registres);
        if(search)

            if(data?.registres)
                setRegistresFiltre(data.registres?.filter(registre=>(
                    registre.annee>=search
                )));
        return ()=>{}
             
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search,data])
}

export default useFilterRegistres