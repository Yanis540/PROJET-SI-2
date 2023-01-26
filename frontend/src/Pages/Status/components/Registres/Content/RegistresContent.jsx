import {useState} from 'react'
import useFilterRegistres from '../hooks/useFilterRegistres';
import { Spinner } from 'flowbite-react';
import RegistreElement from '../components/RegistreElement';

function RegistresContent({loading,data,search}) {
    const [registresFiltre,setRegistresFiltre]=useState();

  
    useFilterRegistres({data:data,setRegistresFiltre,search})
  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-around flex-wrap w-full'>
        { loading && <Spinner /> }
        {
          !loading&&data &&registresFiltre&& 
          registresFiltre?.map(registre=>(
            <RegistreElement key={registre?.num_registre} registre={registre} /> 
          )) 
        }
        {
          !loading&&!data?.registres?.length && (
            <div className=' flex flex-col items-center justify-center flex-1  '> 
              <h2 className='text-center mx-auto mt-5 p-7 rounded-lg text-lg font-semibold   text-white bg-gray-800 ' > Pas de registres 😭 😭 😭 😭  ! </h2>
            </div>
          )
        }
              
      </div>
  )
}

export default RegistresContent