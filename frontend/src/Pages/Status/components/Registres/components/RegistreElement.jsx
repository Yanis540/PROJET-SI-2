import { useState } from 'react';
import ActeRegistre from './Row/ActeRegistre'
import DescriptionRegistre from './Description/DescriptionRegistre'
import HeadRegistre from './Head/HeadRegistre'

function RegistreElement({registre}) {
    const[open,setOpen]=useState(true);
    const toggle=()=>setOpen(!open);
  return (
    
    <div className="overflow-x-auto w-full md:w-[50%] overflow-y-scroll scrollbar-hide relative shadow-sm sm:rounded-lg dark mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-[400px] " >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded table  ">
            <DescriptionRegistre registre={registre}  /> 
            <HeadRegistre registre={registre} toggle={toggle} open={open}  /> 
            {
                open&&(
                    <tbody>
                    {
                        registre?.actes?.slice(0,3)?.map((acte)=>(
                            <ActeRegistre key={acte?.num_acte} acte={acte} /> 
                        ))
                    }
    
                </tbody>
                )
            }
   
        </table>
    </div>

  )
}

export default RegistreElement