import React from 'react'

function PersonnellesMariage({acte_naissance,mari}) {
    return (
        <>
            <h2 className='mt-1 mb-2 border-b-[1px] border-b-gray-600 pb-2'>{mari?"Mari":"Femme"} </h2>
            <div className='flex flex-row justify-between items-center'>
                <div>
                    <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Nom :  <span className='text-gray-100' >{acte_naissance?.nom}</span></p>
                    <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Prénom :  <span className='text-gray-100' >{acte_naissance?.prenom}</span></p>
                    <p className="mt-1 text-sm font-normal text-gray-500 flex flex-row items-center justify-start w-full">Sexe :  <span className='text-gray-100' >{acte_naissance?.sexe}</span></p>
                </div>
                <div>
                    <p className="mt-1 text-sm font-normal text-gray-500">Lieu de naissance : <span className='text-gray-100' > {acte_naissance?.acte?.lieu}</span></p>
                    <p className="mt-1 text-sm font-normal text-gray-500">Date de naissance : <span className='text-gray-100' > {new Date(acte_naissance?.acte?.date).toLocaleDateString()}</span></p>
                    <p className="mt-1 text-sm font-normal text-gray-500">Profession : <span className='text-gray-100' > {acte_naissance?.profession}</span></p>
                </div>
            </div>
        </>
    )
}

export default PersonnellesMariage