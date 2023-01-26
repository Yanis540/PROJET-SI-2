import React from 'react'
import Personnelles from '../../Components/ContenuActe/Personnelles';
import Parents from '../../Components/ContenuActe/Parents';
import Declarations from '../../Components/ContenuActe/Declarations';


function ContenuActeDeces({acte,acte_deces}) {
    const {acte_naissance}=acte_deces;
    const {acte_naissance_mere,acte_naissance_pere}=acte_naissance;
    return (
        <div className='p-5 rounded text-lg font-semibold w-full text-left  text-white bg-gray-800 cursor-pointer border-b border-gray-900 dark mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <Personnelles acte={acte} acte_naissance={acte_naissance}/> 
            <Parents acte_naissance_mere={acte_naissance_mere} acte_naissance_pere={acte_naissance_pere} /> 
            <Declarations acte={acte} /> 
        </div>
    )
}

export default ContenuActeDeces