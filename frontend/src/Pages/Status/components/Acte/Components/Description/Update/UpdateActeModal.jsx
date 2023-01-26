import {useState,Fragment} from 'react'
import { Modal, Spinner } from 'flowbite-react'
import UpdateIcon from '@mui/icons-material/Update';
import { useError } from '../../../../../../../Hooks/hooks';
import { useStateValue } from '../../../../../../../state/StateProvider';
import { useActeForm, useUpdateActe } from '../../../../../../../features/actes/actes';
import useHandleUpdatedActe from './Hooks/useHandleUpdatedActe';
import { UpdateForm } from '../../../../../../../Layouts/layouts';


function UpdateActeModal({acte}) {
    const [{user}]=useStateValue();

    const {form,onChange,inputs,clearForm}=useActeForm({type_acte:acte?.type,acte_naissance:acte?.acte_naissance})
    const {data,loading,error,execute:update}=useUpdateActe({token:user?.accessToken,numero_acte:acte?.num_acte});

    const [show,setShow]=useState(false)
    const Open=()=> setShow(true);
    const Close=()=> setShow(false);

    useError({error});
    useHandleUpdatedActe({data,clearForm});
   
    const handleUpdate=async(e)=>{
        e.preventDefault();
        await update(form)
    };
  return (
    <Fragment>
        <UpdateIcon onClick={Open} className={"cursor-pointer"}/> 
        <Modal
            show={show}
            size="md"
            popup={true}
            onClose={Close}
            className={"dark"}
        >
            <Modal.Header />
            <Modal.Body>
                {
                    !loading?(
                        <UpdateForm inputs={inputs} onChange={onChange} handleUpdate={handleUpdate} message="Mettre à jour l'acte  " /> 
                    ):(
                        <Spinner /> 
                    )
                }
            </Modal.Body>
        </Modal>
    </Fragment>
  )
}

export default UpdateActeModal