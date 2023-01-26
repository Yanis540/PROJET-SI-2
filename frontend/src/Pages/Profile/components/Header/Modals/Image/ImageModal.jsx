import {useState,Fragment} from 'react'
import { Modal, Spinner } from 'flowbite-react'
import { Photo} from '../../../../../../Layouts/layouts';
import UpdateImageForm from './Form/UpdateImageForm';
import { useUpdateFile } from '../../../../../../Hooks/hooks';
import { FileTypes } from '../../../../../../utils/functions/content/fileTypes';

const {
    IMAGE
}=FileTypes
function ImageModal() {

    
    const {loading,onChange,handleUpdate,file }=useUpdateFile({AllowedFileTypes:[IMAGE]});
    const [show,setShow]=useState(false)
    const Open=()=> setShow(true);
    const Close=()=> setShow(false);
 

  return (
    <Fragment>
        <Photo onClick={Open} /> 
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
                        <UpdateImageForm file={file} onChange={onChange} handleUpdate={handleUpdate}  /> 
                    ):(
                        <Spinner /> 
                    )
                }
            </Modal.Body>
        </Modal>
    </Fragment>
  )
}

export default ImageModal