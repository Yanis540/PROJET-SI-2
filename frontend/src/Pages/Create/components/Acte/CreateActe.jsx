import { useCreateActe, useCreateActeForm } from '../../../../features/actes/actes'
import CreateActeDescription from './Description/CreateActeDescription';
import CreateActeForm from './Form/CreateActeForm';
import { useStateValue } from '../../../../state/StateProvider';
import { useError } from '../../../../Hooks/hooks';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from 'flowbite-react';


function CreateActe() {
  const [{user}]=useStateValue();
  const {
    form,onChange,inputs,clearForm,
    declarations,temoins
  }=useCreateActeForm();
  const {type_acte}=form;
  const {data,loading,error,execute:create}=useCreateActe({token:user?.accessToken})
  
  const onSubmit=async(e)=>{
    e.preventDefault();
    const list_declarants=declarations?.persons?.map(person=>({NIN:person.NIN}));
    const list_temoins=temoins?.persons?.map(person=>({NIN:person.NIN}));
    const parents={
      numero_acte_naissance_pere:form.numero_acte_naissance_pere,
      numero_acte_naissance_mere:form.numero_acte_naissance_mere,
    }
    const mariage={
      numero_acte_naissance_mari:form.numero_acte_naissance_mari,
      numero_acte_naissance_femme:form.numero_acte_naissance_femme,
    }
    await create({...form,parents,mariage,list_declarants,list_temoins});
  }
  useError({error});  
  useEffect(()=>{
    if(data?.acte){
      toast.success(data?.message);
      clearForm();
      declarations.removeAllpersons();
      temoins.removeAllpersons();

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data?.acte])

  return (
    <div className="border-gray-900 dark mt-5 mx-auto w-full flex flex-col items-center">
      {loading&&(
        <Spinner /> 

      )}
      <CreateActeDescription type_acte={type_acte}  />
      <CreateActeForm 
        type_acte={type_acte} 
        declarations={declarations} 
        temoins={temoins}  
        inputs={inputs} 
        onChange={onChange} 
        onSubmit={onSubmit}
      /> 

    </div>
  )
}

export default CreateActe