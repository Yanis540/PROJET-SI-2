import { Inputs } from '../../../../../../Layouts/layouts';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
function Declarants({declarations}) {
    const{
        persons:declarants=[],
        addPerson:addDeclarant,
        onChangePerson:onChangeDeclarant,
        removePerson:removeDeclarant
    }=declarations;
  return (
    <div className='flex flex-col items-between '>
        <h2 className='mt-1 mb-2 border-b-[1px] border-b-gray-600 pb-2'>Déclarants</h2>
        <GroupAddIcon className='mt-2 mb-5 cursor-pointer' fontSize='large'  onClick={addDeclarant}>Ajouter </GroupAddIcon>
        <div className={declarants.length&&'border-[1px] border-gray-600 p-2 rounded-md'}>
        {
            <Inputs inputs={declarants} onChange={onChangeDeclarant} canRemove remove={removeDeclarant}/>  
        }
        </div>
    </div>
  )
}

export default Declarants