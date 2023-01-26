import React from 'react'
import { useStateValue } from '../../../../../state/StateProvider'

function CreateActeDescription({type_acte}) {
  const [{user}]=useStateValue();
  const {commune,commune:{ville}}=user;
  
  return (
    <div className='flex flex-row items-center justify-between p-5 rounded-t text-lg font-semibold w-full text-left  text-white bg-gray-800  border-b border-gray-900 dark mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
      <div> Crée Un Nouvel Acte de {type_acte} </div>
      <div>
        {commune?.nom_commune}, {ville?.nom_ville} , {ville?.pays} 
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Year : <span className="text-gray-100"> {new Date().getFullYear()}</span>
        </p>
      </div>
    </div>
  )
}

export default CreateActeDescription