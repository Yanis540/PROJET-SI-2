import { SelectInput } from '../../../../Layouts/layouts'
import { useState } from 'react'
import { STATUS , ARRAY_STATUS } from '../../../Status/Types/StatusTypes';
import { Button, Spinner } from 'flowbite-react';
import { useCreateRegistre } from '../../../../features/actes/actes';
import { useStateValue } from '../../../../state/StateProvider';
import { useEffect } from 'react';
import CreateRegistreDisplay from './Display/CreateRegistreDisplay';
import { useError } from '../../../../Hooks/hooks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const {
  NAISSANCE
}=STATUS
function CreateRegistre() {
  const [{user}]=useStateValue();
  const [typeRegistre,setTypeRegistre]=useState(NAISSANCE);
  const input={name:"type_registre",defaultValue:NAISSANCE,values:ARRAY_STATUS};
  const {data,loading,error,execute:addRegistre}=useCreateRegistre({token:user?.accessToken});
  const navigate=useNavigate();
  
  useError({error});
  useEffect(()=>{
    if(data?.message) {
      toast.success(data?.message)
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])

  const handleAdd=async()=>{
    await addRegistre({type_registre:typeRegistre});
    setTypeRegistre(NAISSANCE);
  };
  const onChange=(e)=> setTypeRegistre(e.target.value)
  return (
    <div className=" flex flex-row flex-1   justify-between items-center w-full min-h-full  border-gray-900 dark mt-5 mx-auto ">
      <div className="flex flex-col flex-1 items-between justify-between  h-[350px] p-5 rounded-t text-lg font-semibold w-full text-left  text-white bg-gray-800  border-b border-gray-900 dark mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        {
          !loading?(
          <>
            <CreateRegistreDisplay /> 
            <div className='gap-3'>
              <SelectInput input={input} onChange={onChange} /> 
            </div>
            <div className="w-full">
              <Button onClick={handleAdd}>
                Add 
              </Button>
            </div>
          </>
          ):(
          <Spinner /> 
          )
        }
      </div>
    </div>
  )
}

export default CreateRegistre