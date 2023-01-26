import { Inputs } from '../../../../../Layouts/layouts'
import { STATUS } from '../../../../Status/Types/StatusTypes'
import Declarants from './Declarants/Declarants'
import Temoins from './Temoins/Temoins'


const {
    MARIAGE
}=STATUS
function CreateActeForm(data) {
    const {
        type_acte,
        inputs,
        onChange,
        onSubmit,
        declarations,temoins
    }=data
    

  return (
    <form onSubmit={onSubmit} className='flex flex-col justify-between gap-[20px] p-5 rounded text-lg font-semibold w-full text-left  text-white bg-gray-800 border-b border-gray-900 dark mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <Inputs inputs={inputs} onChange={onChange} /> 
        {/* rajouter la liste des déclarants */}
        <Declarants declarations={declarations} />
        {
            type_acte===MARIAGE &&(
                <Temoins temoins={temoins} /> 
            )
        }
        <div className="w-full">
            <button 
                type='submit' 
                className='p-2 cursor-pointer e text-gray-500 bg-gray-900 border border-transparent hover:bg-gray-800 group flex h-min items-center justify-center text-center font-medium  rounded-lg  mx-auto mt-5'
            >
                Crée
            </button>
            
        </div>
    </form>
  )
}

export default CreateActeForm