import React from 'react'

function Input(data) {
  const {
    input,
    setInput,
    isForm,
    placeHolder='Type...',
    customClass,
    password,
    email,
    name
  }=data
  const defaultClass="input w-full border-[1px] border-gray-700";
  return (
    <input 
      name={name} 
      value={input}   
      onChange={
        e=>
        isForm?(
          setInput((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
          }))
        ):(
          setInput(e.target.value)
        )
      }  
      type={!password?"text":!email?'password':'email'} 
      placeholder={!password?placeHolder:'***********'}
      className={!customClass?defaultClass:customClass} 
    />
  )
}

export default Input