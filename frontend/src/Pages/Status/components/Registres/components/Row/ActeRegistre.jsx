import React from 'react'
import { Link } from 'react-router-dom';
import { STATUS } from '../../../../Types/StatusTypes'

const {
    NAISSANCE,
    DECES
}=STATUS
function ActeRegistre({acte}) {
    const url=`/registre/${acte?.type===NAISSANCE?'naissance':acte?.type===DECES?"deces":"mariage"}/acte/${acte?.num_acte}`
    return (
        <tr className="bg-white w-full border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {acte?.num_acte}
            </th>
            <td className="py-4 px-6">
                {acte?.date}
            </td>
            <td className="py-4 px-6">
                {acte?.lieu}
            </td>
            {
                acte.type===NAISSANCE&&(
                    <td className="py-4 px-6">
                        {acte?.officier?.matricule}
                    </td>
                )
            }

            <td className="py-4 px-6 text-right">
                <Link to={url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</Link>
            </td>
        </tr>
    )
}

export default ActeRegistre