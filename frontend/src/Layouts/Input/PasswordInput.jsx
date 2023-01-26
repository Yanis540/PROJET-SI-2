import React from 'react'
import { Input } from '../layouts'
import { LoginInputClass } from './classes/index'

function PasswordInput({setInput,dataForPasswordInput,label='',text=''}) {
  return (
    <div className="mb-6">
      <label className="block text-neutral text-sm font-bold mb-2" htmlFor="password">
        {label?label:'Password'}
      </label>
      <Input password setInput={setInput} {...dataForPasswordInput} customClass={LoginInputClass}/> 

      <p className="text-red text-xs italic">{text?text:'Please choose a password.'}</p>
    </div>
  )
}

export default PasswordInput