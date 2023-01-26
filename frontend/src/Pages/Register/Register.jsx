import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useRegister } from '../../features/authentification/authentification';
import RegisterForm from './components/RegisterForm';
import RegisterDialog from './components/RegisterDialog';
import { useError } from '../../Hooks/hooks';

function Register() {
    // eslint-disable-next-line no-empty-pattern, no-unused-vars
    const [form,setForm]=useState({
        nom:'',
        prenom:'',
        email:'',
        password:'',
        confirmPassword:'',
        numero_commune:''
    });
    const {nom,prenom,email,password,confirmPassword,numero_commune}=form;
   
    const {data,error,execute:register}=useRegister({})
    const onSubmit=async(e)=>{
        e.preventDefault()
        const array=[nom,prenom,email,password,confirmPassword]
        for(let element of array) if(!element|| ! element.trim()) return toast.error('Fields Required');
        if(password!==confirmPassword) return toast.error("Password don't match");
        await register({
            nom,
            prenom,
            email,
            password,
            confirmPassword,
            numero_commune
        })
    }
    useError({error})
    useEffect(()=>{
        if(data&& data.message) {
            toast.success(data.message)
            setForm({nom:'',prenom:'',photo:'',email:'',password:'',confirmPassword:'',numero_commune:''})
        }
        return ()=>{
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    const dataForNomInput={name:'nom',input:nom,placeHolder:'Nom',isForm:true}
    const dataForPrenomInput={name:'prenom',input:prenom,placeHolder:'Prénom',isForm:true}
    const dataForEmailInput={name:'email',input:email,placeHolder:'Email',isForm:true,}
    const dataForPasswordInput={name:'password',input:password,isForm:true}
    const dataForNumeroCommune={name:'numero_commune',input:numero_commune,placeHolder:'Numéro commune ',isForm:true}
    const dataForConfirmPasswordInput={name:'confirmPassword',input:confirmPassword,isForm:true}
    const dataForRegisterForm={
        dataForNomInput,dataForPrenomInput,
        dataForPasswordInput,
        dataForEmailInput,dataForNumeroCommune,
        onSubmit,dataForConfirmPasswordInput
    } 
    return (
        <>
            <RegisterDialog /> 
            <div className='h-[100%] flex-1 flex flex-col items-center justify-center w-4/5 mx-auto gap-y-2'>
                <RegisterForm {...dataForRegisterForm} setInput={setForm} />
            </div>
        </>
    )
}

export default Register