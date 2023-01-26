import React from 'react'
import { EmailInput,PasswordInput } from '../../../Layouts/layouts'
import RedirectToRegister from './components/RedirectToRegister'
function LoginForm({onSubmit,dataForEmailInput,dataForPasswordInput,setInput}) {
  return (
    <div className='flex-1 w-full flex flex-col items-center justify-center '>
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2  ">
            <EmailInput setInput={setInput} dataForEmailInput={dataForEmailInput} />  
            <PasswordInput setInput={setInput} dataForPasswordInput={dataForPasswordInput} /> 
            
            <div className="flex items-center justify-center">
                <button 
                    type='submit' 
              
                    className="flex flex-col items-center justify-center p-3 
                     bg-gray-900 text-gray-300 rounded
                     hover:text-gray-900
                     hover:bg-white
                     hover:border-[1px] 
                     hover:border-gray-900 
                     transition-all delay-150
                     ease-in-out" >
                    Sign In
                </button>
                {/* <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a> */}
            </div>
            <RedirectToRegister /> 
        </form>
    </div>
  )
}

export default LoginForm