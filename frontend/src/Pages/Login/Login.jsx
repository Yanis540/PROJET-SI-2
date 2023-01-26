import { useState} from 'react'
import './Login.css'
import { useStateValue} from '../../state/StateProvider.js'
import {  useLogin } from '../../features/authentification/authentification.js';
import LoginForm from './components/LoginForm';
import useHandleLogin from './hooks/useHandleLogin';
import { toast } from 'react-toastify';
import LoginDialog from './components/LoginDialog';

function Login() {
    // eslint-disable-next-line no-empty-pattern
    const [{},dispatch]=useStateValue();
    const [form,setForm]=useState({
      email:'',
      password:''
    })
    const {email,password}=form;
    const {data,error,execute:login}=useLogin()
    const onSubmit=async(e)=>{
      e.preventDefault();
      if(!email || !password) return toast.error('Email/Password Required')
      await login({email,password})
    }
    useHandleLogin({error,data,dispatch,setForm})

    const dataForEmailInput={name:'email',input:email,setInput:setForm,placeHolder:'Email',isForm:true,}
    const dataForPasswordInput={name:'password',input:password,setInput:setForm,isForm:true}
    const dataForRegisterForm={dataForPasswordInput,dataForEmailInput,onSubmit} 
  return (
    <>
      <LoginDialog /> 
      <div className='h-[100%] flex-1 flex flex-col items-center justify-center w-4/5 mx-auto gap-y-2'>
        <LoginForm {...dataForRegisterForm} setInput={setForm} /> 
      </div>
    </>
  )
}

export default Login