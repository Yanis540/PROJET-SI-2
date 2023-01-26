import React from 'react'
import { EmailInput, PasswordInput, TextInput } from '../../../Layouts/layouts'

import GoToLoginPage from './components/GoToLoginPage'

function RegisterForm(data) {
  const {
    dataForNomInput,
    dataForPrenomInput,
    dataForPasswordInput,
    dataForEmailInput,
    dataForNumeroCommune,
    onSubmit,
    dataForConfirmPasswordInput,
    setInput
  } = data
  return (
    <div className='flex-1 w-full flex flex-col items-center justify-center '>
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2  ">
        <TextInput setInput={setInput} dataForTextInput={dataForNomInput} text={'Nom'} /> 
        <TextInput setInput={setInput} dataForTextInput={dataForPrenomInput} text={'Prénom'} /> 
        <TextInput setInput={setInput} dataForTextInput={dataForNumeroCommune} text={'Numéro Commune '} /> 
        <EmailInput setInput={setInput} dataForEmailInput={dataForEmailInput} />  
        <PasswordInput setInput={setInput} dataForPasswordInput={dataForPasswordInput} /> 
        <PasswordInput setInput={setInput} dataForPasswordInput={dataForConfirmPasswordInput} label={"Confirm Password"} text={'Please confirm the password.'} /> 

        <div className="flex items-center justify-center">
          <button type='submit' className="flex flex-col items-center justify-center p-3 
            bg-gray-900 text-gray-300 rounded
            hover:text-gray-900
            hover:bg-white
            hover:border-[1px] 
            hover:border-gray-900 
            transition-all delay-150
            ease-in-out" 
          >
            Register
          </button>
        </div>
        <GoToLoginPage /> 
      </form>
    </div>

  )
}

export default RegisterForm