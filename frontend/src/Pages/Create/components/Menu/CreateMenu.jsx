import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function CreateMenu() {
  const [categories] = useState([
    {name:"Acte",to:"/create/acte"},
    {name:"Registre",to:"/create/registre"} 
  ])
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-gray-800 text-gray-200 p-1">
        {
        categories.map((category) => (
          <Tab
            key={category.name}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-800',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            <Link to={category.to} >
              {category.name}
            </Link>
          </Tab>
        ))}
      </Tab.List>
     
    </Tab.Group>
  </div>
  )
}

export default CreateMenu