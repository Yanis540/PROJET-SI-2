import React from 'react'
import { STATUS } from './Types/StatusTypes';
import Acte from './components/Acte/Acte';
import Registres from './components/Registres/Registres';
import Registre from './components/Registre/Registre';



const {
  NAISSANCE,
  DECES,
  MARIAGE
}=STATUS;
function RegistreActes({registres,singleRegistre,acte,type}) {
  const Choose=()=>{
    switch(type){
      case NAISSANCE : 
        if(acte) return <Acte type_acte={NAISSANCE} /> 
        if(singleRegistre) return <Registre type_registre={NAISSANCE} /> 
        return <Registres type_actes={NAISSANCE}/> 
      case DECES : 
        if(acte) return <Acte type_acte={DECES} /> 
        if(singleRegistre) return <Registre type_registre={DECES} />
        return <Registres type_actes={DECES}/> 

      case MARIAGE : 
        if(acte) return <Acte type_acte={MARIAGE} /> 
        if(singleRegistre) return <Registre type_registre={MARIAGE} />
        return <Registres type_actes={MARIAGE}/> 

      default : 
        break;
    }
  }
  return (
    <>
      {
       Choose()
      }
    </>
  )
}

export default RegistreActes