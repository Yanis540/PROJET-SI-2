import { Disclosure } from '@headlessui/react'
import MobileMenuButton from './components/MobileMenuButton.jsx'
import Logo from './components/Logo.jsx'
import DropDown from './components/DropDown.jsx'
import MobileMenu from './components/MobileMenu.jsx'

function Navbar({to,invalid}) {

  const navigation = [
    { name: 'Statistiques', link: '/', current: to==="home"?true:false },
    { name: 'Naissances', link: '/registre/naissance', current: to==="Registre_Naissances"?true:false },
    { name: 'Décès', link: '/registre/deces', current: to==="Registre_Deces"?true:false },
    { name: 'Mariages', link: '/registre/mariage', current: to==="Registre_Mariage"?true:false },
    { name: 'Crée', link: '/create', current: to==="Create"?true:false },
  ]

  const classNames=(...classes)=> classes.filter(Boolean).join(' ')
  
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <MobileMenuButton open={open} /> 
              <Logo classNames={classNames} navigation={navigation} /> 
              <DropDown classNames={classNames} /> 
            </div>
          </div>
          <MobileMenu classNames={classNames} navigation={navigation} /> 
        </>
      )}
    </Disclosure>
    )
}

export default Navbar