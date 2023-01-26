import React from 'react'

function Declarant({declarant}) {
  return (
    <div>
        <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">NIN :  <span className='text-gray-100' >{declarant?.NIN}</span></p>
        <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">CNI :  <span className='text-gray-100' >{declarant?.CNI}</span></p>
        <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Nom Déclarant :  <span className='text-gray-100' >{declarant?.nom}</span></p>
        <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Prénom Déclarant :  <span className='text-gray-100' >{declarant?.prenom}</span></p>
    </div>
  )
}

export default Declarant