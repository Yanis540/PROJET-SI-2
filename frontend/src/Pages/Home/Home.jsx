import useGetStats from '../../features/actes/services/actes/useGetStats'
import { useStateValue } from '../../state/StateProvider'
import { useError } from '../../Hooks/hooks';
import {Spinner} from 'flowbite-react'
import Histogrammes from './components/Histogrammes/Histogrammes';
import Lines from './components/Lines/Lines';

function Home() {
  const [{user}]=useStateValue();
  const {data,loading,error}=useGetStats({token:user?.accessToken});
  useError({error})
  return (
    <div className=' flex flex-row items-between justify-center flex-wrap gap-[20px]   flex-1 text-white h-max w-full'>
      {
        loading||!data?(
          <div className='flex-1 flex flex-col items-center justify-center'>
            <Spinner /> 
          </div>
        ):(
          <>
            <Histogrammes data={data} /> 
            <Lines data={data} /> 
          </>
        )
      }
    </div>
  )
}

export default Home