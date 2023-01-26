import React from 'react'
import { useStateValue } from '../../../../state/StateProvider';
import { OFFICIER_ROLES } from '../../../../Types/Types';
import ImageModal from './Modals/Image/ImageModal';
import MaireModale from './Modals/Maire/MaireModale';
const {
    MAIRE
}=OFFICIER_ROLES
function ProfileHeader() {
    const [{user}]=useStateValue();

  return (
    <div className='
        flex flex-row items-center  justify-between p-2 
        border-[1px]  border-gray-600 
        rounded
    '>
        <ImageModal />
        {
            user?.role===MAIRE&&(
                <MaireModale /> 
            )
        }
    </div>
  )
}

export default ProfileHeader