import { Inputs } from '../../../../../../Layouts/layouts';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
function Temoins({temoins:temoinS}) {
    const{
        persons:temoins=[],
        addPerson:addTemoin,
        onChangePerson:onChangeTemoin,
        removePerson:removeTemoin
    }=temoinS
  return (
    <div className='flex flex-col items-between '>
        <h2 className='mt-1 mb-2 border-b-[1px] border-b-gray-600 pb-2'>Témoins</h2>
        <GroupAddIcon className='mt-2 mb-5 cursor-pointer' fontSize='large'  onClick={addTemoin}>Ajouter </GroupAddIcon>
        <div className={temoins.length&&'border-[1px] border-gray-600 p-2 rounded-md'}>
        {
            <Inputs inputs={temoins} onChange={onChangeTemoin} canRemove remove={removeTemoin}/>  
        }
        </div>
    </div>
    
  )
}

export default Temoins