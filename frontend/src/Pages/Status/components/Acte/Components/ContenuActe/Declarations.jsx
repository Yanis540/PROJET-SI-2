import React from 'react'
import Declarant from './Declarant'

function Declarations({acte}) {
  return (
    <>
        <h2 className='mt-5 mb-2 border-b-[1px] border-b-gray-600 pb-2'>Informations Déclarations </h2>
        <div className='flex flex-row justify-between items-center flex-wrap'>
            {
                acte?.declarations?.map(declarant=>(
                   <Declarant key={declarant.NIN} declarant={declarant} /> 
                ))
            }
           
        </div>
    </>
  )
}

export default Declarations