import { STATUS } from '../../../Pages/Status/Types/StatusTypes';
import {  ARRAY_SEXES } from '../../../Pages/Status/Types/SexeTypes';
import { useForm } from '../../../Hooks/hooks';

const {
    NAISSANCE,
    DECES, 
}=STATUS;



function useActeForm({type_acte,acte_naissance}) {
    const formValues={
        date:"",
        lieu:"",
        sexe:!acte_naissance?"":acte_naissance.sexe,
        profession:"",
        numero_acte_naissance_pere:"",
        numero_acte_naissance_mere:"",
        num_acte_naissance_personne_decede:"",
        numero_acte_naissance_mari:"",
        numero_acte_naissance_femme:"",
    }

    const {form,onChange,clearForm}=useForm({defaultValues:formValues})
    const {
        date="",
        lieu="",
        sexe=!acte_naissance?"":acte_naissance.sexe,
        profession="",
        numero_acte_naissance_pere="",
        numero_acte_naissance_mere="",
        num_acte_naissance_personne_decede="",
        numero_acte_naissance_mari="",
        numero_acte_naissance_femme="",
    }=form
    const FORM_ACTE = {
        "NAISSANCE":[
            {name:"lieu",label:"Lieu",value:lieu},
            {name:"date",label:"Date",date:true,value:date},
            {name:"sexe",enum:true,values:ARRAY_SEXES,label:"Sexe",value:sexe},
            {name:"profession",label:"Profession",value:profession},
            {name:"numero_acte_naissance_pere",label:"Acte Naissance Père",value:numero_acte_naissance_pere},
            {name:"numero_acte_naissance_mere",label:"Acte Naissance Mère",value:numero_acte_naissance_mere},
        ],
        "DECES":[
            {name:"date",label:"Date",date:true,value:date},
            {name:"lieu",label:"Lieu",value:lieu},
            {name:"num_acte_naissance_personne_decede",label:"Acte Naissance Personne décédé",value:num_acte_naissance_personne_decede},
        ],
        "MARIAGE":[
            {name:"date",label:"Date",value:date},
            {name:"lieu",label:"Lieu",value:lieu},
            {name:"numero_acte_naissance_mari",label:"Acte Naissance Mari",value:numero_acte_naissance_mari},
            {name:"numero_acte_naissance_femme",label:"Acte Naissance Femme",value:numero_acte_naissance_femme},
        ],
    };

    

    const chooseInputs=()=>{

        if(type_acte===NAISSANCE) return FORM_ACTE.NAISSANCE;
        if(type_acte===DECES) return FORM_ACTE.DECES;
        return FORM_ACTE.MARIAGE;
        
      
    }
    const inputs=chooseInputs();

    
    return {
        form,onChange,inputs,clearForm
    }
}

export default useActeForm