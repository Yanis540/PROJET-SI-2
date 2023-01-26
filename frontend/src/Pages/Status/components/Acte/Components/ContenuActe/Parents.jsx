import React from 'react'

function Parents({acte_naissance_pere,acte_naissance_mere}) {
  return (
    <>
        <h2 className='mt-5 mb-2 border-b-[1px] border-b-gray-600 pb-2'>Informations Parents </h2>
        <div className='flex flex-row justify-between items-center'>
            <div>
                <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Nom Père :  <span className='text-gray-100' >{acte_naissance_pere?.nom}</span></p>
                <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Prénom Père :  <span className='text-gray-100' >{acte_naissance_pere?.prenom}</span></p>
            </div>
            <div>
                <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Nom Mère :  <span className='text-gray-100' >{acte_naissance_mere?.nom}</span></p>
                <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Prénom Mère :  <span className='text-gray-100' >{acte_naissance_mere?.prenom}</span></p>
            </div>
        </div>
    </>
  )
}

export default Parents