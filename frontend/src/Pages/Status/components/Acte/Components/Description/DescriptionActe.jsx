import { useFile } from "../../../../../../Hooks/hooks";
import { useStateValue } from "../../../../../../state/StateProvider";
import DeleteActeModal from "./Delete/DeleteActeModal"
import UpdateActeModal from "./Update/UpdateActeModal";
import DownloadIcon from '@mui/icons-material/Download';
function DescriptionActe({acte,commune,ville,file}) {
  const [{user}]=useStateValue()
  const {downloadFile}=useFile({file,numeroActe:acte?.num_acte,fileName:`Acte_Naissance_${acte?.num_acte}.pdf`});
  return (
    <div className="p-5 rounded-t text-lg font-semibold w-full text-left  text-white bg-gray-800  border-b border-gray-900 dark mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className='flex flex-row items-center justify-between'>
        <div>
          Acte : {acte?.type}  {acte?.num}
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Numéro acte : {acte?.num_acte}</p>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Numéro registre : {acte?.num_registre}</p>
        </div>
        <div>
          {commune?.nom_commune}, {ville?.nom_ville} , {ville?.pays} 
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Day : <span className="text-gray-100"> {new Date(acte?.date).toLocaleDateString()}</span>
          </p>
        </div>
        <div className='flex flex-row items-center  gap-[40px]'>
          {
            file && <DownloadIcon className="cursor-pointer" onClick={downloadFile}/> 
          }
          {
            commune?.num_commune === user?.num_commune&& (
            <>
              <UpdateActeModal acte={acte} /> 
              <DeleteActeModal acte={acte} /> 
            </>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default DescriptionActe