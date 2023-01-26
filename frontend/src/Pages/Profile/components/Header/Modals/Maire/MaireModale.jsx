import {useState,Fragment} from 'react'
import { Modal, Spinner } from 'flowbite-react'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { UpdateForm } from '../../../../../../Layouts/layouts';
import useUpdateMaireFn from './Hooks/useUpdateMaireFn';

function MaireModale() {

    const {
        loading,
        onChange,
        inputs,handleUpdate
    }=useUpdateMaireFn();
    
    const [show,setShow]=useState(false)
    const Open=()=> setShow(true);
    const Close=()=> setShow(false);

  return (
    <Fragment>
        <PersonRemoveIcon className='cursor-pointer' onClick={Open} /> 
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
                        <UpdateForm inputs={inputs} onChange={onChange} handleUpdate={handleUpdate} message="Déléguer " /> 
                    ):(
                        <Spinner /> 
                    )
                }
            </Modal.Body>
        </Modal>
    </Fragment>
  )
}

export default MaireModale