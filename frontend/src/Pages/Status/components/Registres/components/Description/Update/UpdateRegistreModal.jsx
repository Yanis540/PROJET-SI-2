import {useState,Fragment} from 'react'
import { Modal, Spinner } from 'flowbite-react'
import UpdateIcon from '@mui/icons-material/Update';
// import UpdateRegistreForm from './Form/UpdateRegistreForm';
// import { useError } from '../../../../../../../Hooks/hooks';
// import { useStateValue } from '../../../../../../../state/StateProvider';
// import { useForm, useUpdateActe } from '../../../../../../../features/actes/actes';
// import useHandleUpdatedRegistre from './Hooks/useHandleUpdatedRegistre';


function UpdateRegistreModal({registre}) {
    // const [{user}]=useStateValue();

    // const {form,onChange,inputs,clearForm}=useForm({isRegistre:true,type_acte:registre?.type_registre,acte_naissance:acte?.acte_naissance})
    // const {data,loading,error,execute:update}=useUpdateActe({token:user?.accessToken,numero_acte:acte?.num_acte});

    const [show,setShow]=useState(false)
    const Open=()=> setShow(true);
    const Close=()=> setShow(false);

    // useError({error});
    // useHandleUpdatedRegistre({data,clearForm});
   
    // const handleUpdate=async()=>await update(form);
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
                    // !loading?(
                        // <UpdateRegistreForm inputs={inputs} onChange={onChange} handleUpdate={handleUpdate} /> 
                    // ):(
                    //     <Spinner /> 
                    // )
                }
            </Modal.Body>
        </Modal>
    </Fragment>
  )
}

export default UpdateRegistreModal