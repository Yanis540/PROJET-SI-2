import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import {  Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useStateValue } from '../../../../state/StateProvider'
import { handleLogout } from '../../../../features/authentification/authentification'

function DropDownMenu({classNames}) {
    const [,dispatch]=useStateValue()
    const navigate=useNavigate();
    const logout=e=>{
        handleLogout(dispatch,navigate);
    }
    const items=[
        { name:"Profile" , link:"/profile" },
        // { name:"Settings" , link:"/settings" },
        { name:"Signout", signOut:true }
    ]
  return (
    <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {
                items.map(item=>(
                    <Menu.Item key={item.name}>
                        {({ active }) => (
                            !item?.signOut?(
                                <Link
                                    to={item.link}
                                    className={classNames(active ? 'bg-gray-100 cursor-pointer' : 'cursor-pointer', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                                >
                                {item.name}
                                </Link>
                            ):(
                                <p
                                    key={item.name}
                                    className={classNames(active ? 'bg-gray-100 cursor-pointer' : 'cursor-pointer', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                                    onClick={logout}
                                >
                                    Sign Out
                                </p>
                            )
               
                        )}
                </Menu.Item> 
                ))
            }

        </Menu.Items>
    </Transition>
  )
}

export default DropDownMenu