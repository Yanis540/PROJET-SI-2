import { useForm } from '../../../Hooks/hooks';
import { OFFICIER_ROLES } from '../../../Types/Types';



const {
    MAIRE
}=OFFICIER_ROLES;

function useUserForm({type="IMAGE"}={}) {
    const formValues={
        photo:'',
        nouveau_maire:''
    }

    const {form,onChange,clearForm}=useForm({defaultValues:formValues})
    const {
        photo="",
        nouveau_maire=''
    }=form
    const FORM_INPUTS = {
        "MAIRE":[
            {name:"nouveau_maire",label:"Matricule Nouveau Maire ",value:nouveau_maire ,type:'number'},
        ],
        "IMAGE":[
            {name:"photo",value:photo ,type:'file',file:true},

        ]
    }

    const chooseInputs=()=>{
        if(type===MAIRE) return FORM_INPUTS.MAIRE;
        return FORM_INPUTS.IMAGE;
        
    }
    const inputs=chooseInputs();

    
    return {
        form,onChange,inputs,clearForm
    }
}

export default useUserForm