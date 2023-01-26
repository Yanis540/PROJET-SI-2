import React from 'react'
import { useStateValue } from '../../../../state/StateProvider'

function ProfileDetails() {
    const [{user}]=useStateValue();
    return (
        <div className='
            flex flex-1 flex-col gap-[10px] items-start justify-start 
            rounded p-2 mt-2 
        '>
            <h2 className="flex flex-row items-center justify-between mt-1 text-sm font-normal text-gray-500">
                Nom : 
                <span className="flex-1 text-gray-100"> 
                    {user?.nom}
                </span>
            </h2>
            <h2 className="mt-1 text-sm font-normal text-gray-500">
                Prénom : 
                <span className="text-gray-100">
                    {user?.prenom}
                </span>
            </h2>

            <h2 className="mt-1 text-sm font-normal text-gray-500" >
                Role : 
                <span className="text-gray-100">
                    {user?.role}
                </span>
            </h2>
            
        </div>
    )
}

export default ProfileDetails