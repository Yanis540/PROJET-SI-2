import { useState } from 'react'

function useForm({defaultValues={}}) {

    const [form,setForm]=useState( defaultValues );
    const clearForm=()=> setForm(defaultValues)
    

    const onChange=(e)=>{
        setForm((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    return {form,onChange,clearForm}
}

export default useForm