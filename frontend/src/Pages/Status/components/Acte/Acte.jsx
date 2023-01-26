import { useParams } from 'react-router-dom'
import { useGetSingleActe } from '../../../../features/actes/actes';
import { useStateValue } from '../../../../state/StateProvider';
import { ACTE_NOT_FOUND } from '../../../../ENV/errorTypes.js';
import NotFound from '../../../NotFound/NotFound';
import { useError } from '../../../../Hooks/hooks';
import LoadingActe from './Loading/LoadingActe';
import { STATUS } from '../../Types/StatusTypes';
import Naissance from './Naissance/Naissance';
import Deces from './Deces/Deces';
import Mariage from './Mariage/Mariage';

const {
    NAISSANCE,
    DECES,
    MARIAGE
}=STATUS
function Acte({type_acte}) {
  const {id}=useParams();
  const [{user}]=useStateValue();
  const {data,error,loading}=useGetSingleActe({token:user?.accessToken,numero_acte:id,type_acte});
  useError({error});
  if(loading) return <LoadingActe />
  
  if(error&& error?.cause===ACTE_NOT_FOUND)return<NotFound/> ;
  const ChooseActe=()=>{
    switch(type_acte){
        case NAISSANCE:
            return <Naissance acte={data?.acte} file={data?.pdfData} /> 
        case DECES:
            return <Deces acte={data?.acte} /> 
        case MARIAGE:
            return <Mariage acte={data?.acte} /> 
        default :
            break;
    }
  }
  return (
    <>
    {
      data?.acte&&
      ChooseActe()
    }
    </>
  )
}

export default Acte