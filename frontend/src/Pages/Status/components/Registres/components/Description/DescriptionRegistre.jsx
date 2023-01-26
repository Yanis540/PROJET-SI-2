import React from 'react'
// import DeleteRegistreModal from './Delete/DeleteRegistreModal'
// import UpdateRegistreModal from './Update/UpdateRegistreModal'
import { Link } from 'react-router-dom';
import { STATUS } from '../../../../Types/StatusTypes';

const {
  NAISSANCE,
  DECES
}=STATUS
function DescriptionRegistre({registre}) {
  const url=`/registre/${registre?.type_registre===NAISSANCE?'naissance':registre?.type_registre===DECES?"deces":"mariage"}/registre/${registre?.num_registre}`

  return (
    <caption className="p-5 rounded-t text-lg font-semibold w-full text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800  sticky top-0">
      <div className='flex flex-row items-center justify-between'>
        <div>
          {registre?.annee}
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Nombre d'actes :<span  className='text-gray-200'> {registre?.actes?.length}</span></p>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Numéro : {registre?.num_registre}</p>
        </div>
        <div className='cursor-pointer'>
          <Link to={url} >
            Commune {registre.num_commune}
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Type : {registre?.type_registre}</p>
          </Link>
        </div>
        {/* <div className='gap-3'> */}
          {/* <UpdateRegistreModal registre={registre} />  */}
          {/* <DeleteRegistreModal registre={registre} />  */}
        {/* </div> */}
      </div>
    </caption>
 
  )
}

export default DescriptionRegistre