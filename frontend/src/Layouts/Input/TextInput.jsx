import React from 'react'
import {Input} from '../layouts'
import { LoginInputClass } from './classes/index'

function TextInput({setInput,text,dataForTextInput}) {
  
  return (
    <div className="mb-4">
      <label className="block text-neutral text-sm font-bold mb-2" htmlFor="username">
        {text}
      </label>
      <Input setInput={setInput} {...dataForTextInput} customClass={LoginInputClass}/> 
    </div>
  )
}

export default TextInput