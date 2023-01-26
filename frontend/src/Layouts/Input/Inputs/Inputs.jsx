import React from 'react'
import {Label,TextInput} from 'flowbite-react'
import {SelectInput} from '../../layouts'
import DeleteIcon from '@mui/icons-material/Delete';

function Inputs({inputs,onChange,canRemove,remove}) {
    return (
        <>
            {
                inputs?.map((input,index)=>(
                    <div className='flex flex-col mt-5' key={index}>
                        <div className="mb-2 flex flex-row justify-between items-center">
                            <Label htmlFor={input.name} value={input.label} />
                            {
                                canRemove&&(
                                    <DeleteIcon className='cursor-pointer' onClick={e=>remove(e,input?.id)} />
                                )
                            }
                        </div>
                        {
                            !input?.enum?(
                                <TextInput 
                                    type={input?.type?input.type:'text'} 
                                    id={input.id??input.name} 
                                    value={input.value}
                                    name={input.name} 
                                    onChange={e=>onChange(e,input?.id)}  
                                />
                            ):(
                                <SelectInput input={input} onChange={onChange} /> 
                            )
                        }
    
               
                    </div>

                ))
            }

        </>
    )
}

export default Inputs