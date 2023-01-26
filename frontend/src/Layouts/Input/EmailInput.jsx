import React from 'react'
import { Input } from '../layouts'
import { LoginInputClass } from './classes/index'

function EmailInput({setInput,dataForEmailInput}) {
  return (
    <div className="mb-4">
      <label className="block text-neutral text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <Input email setInput={setInput} {...dataForEmailInput} customClass={LoginInputClass} /> 
    </div>
  )
}

export default EmailInput