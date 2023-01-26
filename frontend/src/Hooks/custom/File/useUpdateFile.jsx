import { useState } from 'react'
import useUpdatedFile from './useUpdatedFile';
import { useStateValue } from '../../../state/StateProvider';
import { useUpdateUser } from '../../../features/user/user';
import {useError, useFile} from '../../hooks';
import { fileExtension } from '../../../utils/utils';
import { toast } from 'react-toastify';


function useUpdateFile({AllowedFileTypes=[]}) {
    const [{user}]=useStateValue();
    const {data,loading,error,execute:update}=useUpdateUser({token:user?.accessToken})
 
    const [file,setFile]=useState(null)
    const {sendFile}=useFile({file,execute:update})
    const onChange=e=>setFile(e.target.files[0]);
    const handleUpdate=async(e)=>{
        e.preventDefault();
        if(!file) return ;
        if(!AllowedFileTypes.some(type=>fileExtension(file?.name)===type)){
            toast.error("Can't use file type");
            setFile(null)
            return ;
        }
        await sendFile()
    };
    useError({error});
    useUpdatedFile({data,clearForm:()=>setFile(null)});

    return {
        loading,
        file,
        onChange,
        handleUpdate
    }
    
}

export default useUpdateFile