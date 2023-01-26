import React from 'react'
import ProfileDetails from './components/Details/ProfileDetails';
import ProfileHeader from './components/Header/ProfileHeader';


function Profile() {
  return (
    <div className='flex-1 flex flex-col items-center justify-start mt-5'>
        <div className='
            flex flex-col flex-wrap 
            mx-auto mb-2 mt-2 p-5 min-w-[50%] max-w-[1200px]
            rounded-lg  bg-gray-800  text-gray-300 font-medium
        '>
            <h2 className='mt-1 mb-2 p-2 text-gray-200 text-center border-b-[1px] border-gray-600 rounded '>Fiche de Renseignement </h2>
            <ProfileHeader  />
            <ProfileDetails /> 

        </div>
    </div>
  )
}

export default Profile