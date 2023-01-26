import React from 'react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure  } from '@headlessui/react'
function MobileMenuButton({open}) {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      {/* Mobile menu button*/}
      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Open main menu</span>

      {
        open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )
      }
      
    </Disclosure.Button>
   </div>
  )
}

export default MobileMenuButton