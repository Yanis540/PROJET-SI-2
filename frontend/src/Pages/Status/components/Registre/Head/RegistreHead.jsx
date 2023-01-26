import { STATUS } from "../../../Types/StatusTypes"

const {
    NAISSANCE
}=STATUS
function RegistreHead({registre}) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="py-3 px-6">
                Numero Acte 
            </th>
            <th scope="col" className="py-3 px-6">
                Date
            </th>
            <th scope="col" className="py-3 px-6">
                lieu
            </th>
            {
                registre.type_registre===NAISSANCE&& (
                    <th scope="col" className="py-3 px-6">
                        Matricule Officier 
                    </th>
                )
            }
            <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    </thead>
  )
}

export default RegistreHead