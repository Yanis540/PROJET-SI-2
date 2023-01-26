import React from 'react'
import Histogramme from './Histogramme/Histogramme'

function Histogrammes({data}) {
    const {
      actesAnneeParTypes,
      actesMariageParLieu,
      actesNaissanceParLieu
    }=data||{}
    const Histogrames=[
        //! les keys ce sont l'axe des Y
         //! l'index c l'axe des X 
        {
          data:actesAnneeParTypes ,
          keys:["_count"],  
          index:"type_registre",
          legend:"Nombre d'actes",
          description:`Nombre Actes par registres de l'année ${new Date().getFullYear()}`
        },
        {
          data:actesMariageParLieu ,
          keys:["_count"],  
          index:"lieu",
          legend:"Nombre d'actes de mariages ",
          description:`Distribution des actes de mariages par lieu `
        },
        {
          data:actesNaissanceParLieu ,
          keys:["_count"],  
          index:"lieu",
          legend:"Nombre d'actes de naissances ",
          description:`Distribution des actes de naissances par lieu `
        },
      ]
    
  return (
    <>
    {
        data&&
        Histogrames.map((hist,index)=>(
        <Histogramme 
            key={index}
            data={hist.data} 
            keys={hist.keys}
            index={hist.index}
            legend={hist.legend}
            description={hist.description}
        /> 
        ))
    }
    </>
  )
}

export default Histogrammes