import { ARRAY_STATUS, STATUS } from '../../../Pages/Status/Types/StatusTypes';
import {  ARRAY_SEXES } from '../../../Pages/Status/Types/SexeTypes';
import { useForm } from '../../../Hooks/hooks';
import { useEffect } from 'react';
import usePersons from './usePersons';

const {
    NAISSANCE,
    DECES, 
    
}=STATUS;

const formValues={
    type_acte:NAISSANCE,
    date:"",
    lieu:"",
    sexe:"HOMME",
    profession:"",
    nom_nouveau_ne:"",
    prenom_nouveau_ne:"",
    numero_acte_naissance_pere:"",
    numero_acte_naissance_mere:"",
    num_acte_naissance_personne_decede:"",
    numero_acte_naissance_mari:"",
    numero_acte_naissance_femme:"",
}
/**
 * 
 * @param {*} type acte  
 * @returns n'oubliez pas la liste des temoins + déclarants 
 */
function useCreateActeForm() {
    const declarations=usePersons({type:"Déclarant"});
    const temoins=usePersons({type:"Témoins"});
    const {form,onChange,clearForm}=useForm({defaultValues:formValues});

    const {
        type_acte=NAISSANCE,
        date="",
        lieu="",
        sexe="HOMME",
        profession="",
        nom_nouveau_ne="",
        prenom_nouveau_ne="",
        numero_acte_naissance_pere="",
        numero_acte_naissance_mere="",
        num_acte_naissance_personne_decede="",
        numero_acte_naissance_mari="",
        numero_acte_naissance_femme="",
    }=form;
    const FORM_ACTE = {
        "NAISSANCE":[
            {name:"type_acte",enum:true,values:ARRAY_STATUS,label:"Type Acte",value:type_acte},
            {name:"date",label:"Date",date:true,value:date},
            {name:"lieu",label:"Lieu",value:lieu},
            {name:"sexe",enum:true,values:ARRAY_SEXES,label:"Sexe",value:sexe},
            {name:"profession",label:"Profession",value:profession},
            {name:"numero_acte_naissance_pere",label:"Acte Naissance Père",value:numero_acte_naissance_pere},
            {name:"numero_acte_naissance_mere",label:"Acte Naissance Mère",value:numero_acte_naissance_mere},
            {name:"nom_nouveau_ne",label:"Nom Nouveau Né",value:nom_nouveau_ne},
            {name:"prenom_nouveau_ne",label:"Prénom Nouveau Né",value:prenom_nouveau_ne},
        ],
        "DECES":[
            {name:"type_acte",enum:true,values:ARRAY_STATUS,label:"Type Acte",value:type_acte},
            {name:"date",label:"Date",date:true,value:date},
            {name:"lieu",label:"Lieu",value:lieu},
            {name:"num_acte_naissance_personne_decede",label:"Acte Naissance Personne décédé",value:num_acte_naissance_personne_decede},
        ],
        "MARIAGE":[
            {name:"type_acte",enum:true,values:ARRAY_STATUS,label:"Type Acte",value:type_acte},
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

    let inputs=chooseInputs();

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        inputs=chooseInputs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[type_acte]);
    return {
        form,
        onChange,
        inputs,
        clearForm,
        declarations,
        temoins,

    }
}

export default useCreateActeForm