import React from 'react'
import PersonnellesMariage from './components/PersonnellesMariage';
import Declarations from '../../Components/ContenuActe/Declarations';

function ContenuActeMariage({acte,acte_mariage}) {
    const {acte_naissance_femme,acte_naissance_mari}=acte_mariage||{};
    return (
        <div className='p-5 rounded text-lg font-semibold w-full text-left  text-white bg-gray-800 cursor-pointer border-b border-gray-900 dark mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <PersonnellesMariage acte_naissance={acte_naissance_mari} mari/> 
            <PersonnellesMariage acte_naissance={acte_naissance_femme} femme/>
            <Declarations acte={acte} /> 
        </div>
    )
}

export default ContenuActeMariage