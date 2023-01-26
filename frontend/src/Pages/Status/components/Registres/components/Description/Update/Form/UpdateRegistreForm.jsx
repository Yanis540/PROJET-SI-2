import {Button} from 'flowbite-react'
import { Inputs } from '../../../../../../../../Layouts/layouts'



function UpdateRegisterForm({inputs,onChange,handleUpdate}) {

    return (
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Mettre à jours l'acte 
            </h3>
            <Inputs inputs={inputs} onChange={onChange} /> 

            <div className="w-full">
                <Button onClick={handleUpdate}>
                    Update
                </Button>
            </div>

        </div>
    )
}

export default UpdateRegisterForm