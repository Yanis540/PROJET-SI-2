import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {Modal,Button} from 'flowbite-react'
import { useDeleteActe } from "../../../../../../../features/actes/actes";
import { Spinner } from "flowbite-react";
import { useStateValue } from "../../../../../../../state/StateProvider";
import { useNavigate } from "react-router-dom";
import { useError } from "../../../../../../../Hooks/hooks";
import { toast } from "react-toastify";

function DeleteActeModal({acte}) {
    const [show,setShow]=useState(false);
    const [{user}]=useStateValue()

    const {data,loading,error,execute:deleteActe}=useDeleteActe({token:user?.accessToken,numero_acte:acte?.num_acte});
    const navigate=useNavigate();
    const handleDelete=async()=>await deleteActe();
    useError({error});
    useEffect(()=>{
      if(data?.acte){
        toast.success(data.message);
        navigate('/');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data?.acte]);
    if(loading) return <Spinner /> 
    const onClick=()=> setShow(true);
    
    const onClose=()=> setShow(false);
    
  return (
    <>
    <React.Fragment >
        <DeleteIcon onClick={onClick} className="cursor-pointer"/> 
        <Modal
            show={show}
            size="md"
            popup={true}
            onClose={onClose}
            className={'dark'}
        >
            <Modal.Header className="dark" />
            <Modal.Body className="dark">
                <div className="text-center ">
                    <h3 className="mb-5 text-lg font-normal text-gray-100 ">
                        Are you sure you want to delete this product?
                    </h3>
                    <div className="flex justify-center gap-4">
                    <Button
                        color="failure"
                        onClick={handleDelete}
                    >
                        Yes, I'm sure
                    </Button>
                    <Button
                        color="gray"
                        onClick={onClose}
                    >
                        No, cancel
                    </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </React.Fragment>
</>

  )
}

export default DeleteActeModal