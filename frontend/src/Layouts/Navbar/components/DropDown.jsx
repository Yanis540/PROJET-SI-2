import React from 'react'
import {  Menu} from '@headlessui/react'
import { OFFICIER_ROLES } from '../../../Types/Types';
import { useStateValue } from '../../../state/StateProvider'
import DropDownMenu from './DropDown/DropDownMenu'
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import LanguageIcon from '@mui/icons-material/Language';
import { useFile } from '../../../Hooks/hooks';

const {
    MAIRE,
    CONSULAIRE
}=OFFICIER_ROLES
function DropDown({classNames}) {
    const [{user,user:{commune}}]=useStateValue();
    const {ville}=commune||{};
    const {url}=useFile({file:user?.photo})
    const defaultImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className=' flex-row items-center justify-between hidden md:flex'>
                {
                    user?.role===MAIRE&&(
                        <GppMaybeIcon className='text-gray-300 hover:bg-gray-700 rounded-md ' /> 
                    )
                }
                {
                    user?.role===CONSULAIRE&&(
                        <LanguageIcon className='text-gray-300 hover:bg-gray-700 rounded-md ' /> 
                    )
                }
                <h2 className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex'>
                    {commune?.nom_commune}, {ville?.nom_ville} , {ville?.pays} 
                </h2>
            </div>
            <Menu as="div" className="relative ml-3">
                <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full cursor-pointer"
                            srcSet={user?.photo?url:defaultImage}
                            alt="profile"
                            referrerPolicy="no-referrer"
                        />
                    </Menu.Button>
                </div>
                <DropDownMenu classNames={classNames} /> 
            </Menu>
        </div>

    )
}

export default DropDown