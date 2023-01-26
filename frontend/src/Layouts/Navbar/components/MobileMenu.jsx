import React from 'react'
import { Disclosure } from '@headlessui/react'

function MobileMenu({navigation,classNames}) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
      {
        navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.link}
            className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))
        }
      </div>
  </Disclosure.Panel>
  )
}

export default MobileMenu