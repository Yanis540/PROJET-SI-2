import {useState} from 'react'
import { useStateValue } from '../../../../state/StateProvider';
import { useGetActesByCategory } from '../../../../features/actes/actes';
import { useError } from '../../../../Hooks/hooks';
import { SearchInput } from '../../../../Layouts/layouts';
import useFetchRegistres from './hooks/useFetchRegistres';
import RegistresContent from './Content/RegistresContent';

function Registres({type_actes}) {
  const [{user}]=useStateValue();
  const [search,setSearch]=useState('');
  const {data,loading,error,fetch}=useGetActesByCategory({token:user?.accessToken,type_acte:type_actes});


  useFetchRegistres({type_actes,fetch});
  useError({error});

  return (
    <div className='flex flex-col items-center flex-wrap mt-5'>
      <SearchInput 
        input={search} 
        setInput={setSearch}
        type={"number"}
        placeholder={"Année Minimum"}
       />  
      <RegistresContent 
        loading={loading} data={data} search={search}
      /> 

      
    </div>
  )
}

export default Registres