import React from 'react'
import { SearchInput, SelectInput } from '../../../../../Layouts/layouts'
import { ARRAY_STATUS_ATTRIBUTS } from '../../../Types/StatusTypes'


function RegistreDescription({registre,search,setSearch}) {
  const {value,select}=search;
  const selectInput= {name:"select",enum:true,values:ARRAY_STATUS_ATTRIBUTS,label:"Sexe",value:select}
  return (
    <caption className="p-5 rounded-t text-lg font-semibold w-full text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800  sticky top-0">
      <div className="flex flex-col w-full gap-[20px] ">
        <div className='flex flex-row items-center justify-between'>
          <div>
            {registre?.annee}
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Nombre d'actes :<span  className='text-gray-200'> {registre?.actes?.length}</span></p>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Numéro : {registre?.num_registre}</p>
          </div>
          <div className='cursor-pointer'>
            Commune {registre.num_commune}
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Type : {registre?.type_registre}</p>
          </div>

    
        </div>
        <div className='flex flex-row items-center gap-[10px]'>
          <SearchInput 
            name='value'
            input={value} 
            setInput={setSearch}
            form
            // type={"text"}
          />  
          <SelectInput 
            input={selectInput} 
            onChange={
              (e)=>setSearch(prev=>({
                ...prev,[e.target.name]:e.target.value
                })
              )
            }
            />
        </div>
      </div>
    </caption>
 
  )
}

export default RegistreDescription