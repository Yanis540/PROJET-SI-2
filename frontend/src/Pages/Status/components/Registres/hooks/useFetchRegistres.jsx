import {useEffect} from 'react'

function useFetchRegistres({type_actes,fetch}) {
    useEffect(()=>{
        fetch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[type_actes]);
}

export default useFetchRegistres