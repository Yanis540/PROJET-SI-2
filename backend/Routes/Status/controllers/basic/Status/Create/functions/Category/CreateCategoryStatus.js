import { CreateActeNaissance } from "./Create/CreateActeNaissance.js";
import { CreateActeDeces } from "./Create/CreateActeDeces.js";
import { CreateActeMariage } from "./Create/CreateActeMariage.js";
import { STATUS } from "../../../types/StatusTypes.js";
const {NAISSANCE,DECES,MARIAGE}=STATUS;

export const CreateCategoryStatus=async(data)=>{
    const {
        type_acte,
        sexe,
        acte,
        profession,
        parents,
        nom_nouveau_ne,
        prenom_nouveau_ne,
        num_acte_naissance_personne_decede,
        mariage,
        list_temoins
    }=data;
     
    switch(type_acte){
        case NAISSANCE:
            return await CreateActeNaissance({ sexe,acte,profession,parents,nom_nouveau_ne,prenom_nouveau_ne,})
        case DECES:
            return await CreateActeDeces({acte,num_acte_naissance_personne_decede})
        case MARIAGE:
            return await CreateActeMariage({acte,mariage, list_temoins})
        default : 
            break;

    }
}