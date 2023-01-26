import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../../state/StateProvider'
function Logo({navigation,classNames}) {
    const [{user}]=useStateValue();
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
            <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
            />
            <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
            />
        </div>
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {   
                    user?.isValid && 
                    navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Logo