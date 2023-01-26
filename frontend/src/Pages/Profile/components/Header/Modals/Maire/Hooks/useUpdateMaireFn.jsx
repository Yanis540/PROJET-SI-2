import {  useStateValue } from '../../../../../../../state/StateProvider';
import { useUpdateMaire, useUserForm } from '../../../../../../../features/user/user';
import { useError } from '../../../../../../../Hooks/hooks';
import { OFFICIER_ROLES } from '../../../../../../../Types/Types';
import useUpdatedMaire from './useUpdatedMaire';

const {
    MAIRE
}=OFFICIER_ROLES

function useUpdateMaireFn() {
    const [{user}]=useStateValue();
    const {data,loading,error,execute:update}=useUpdateMaire({token:user?.accessToken})
    const {form,onChange,inputs,clearForm}=useUserForm({type:MAIRE});

    const handleUpdate=async(e)=>{
        e.preventDefault();
        await update(form)
    };

    useError({error});
    useUpdatedMaire({data,clearForm});
    return {
        loading,
        onChange,
        inputs,handleUpdate
    }
}

export default useUpdateMaireFn