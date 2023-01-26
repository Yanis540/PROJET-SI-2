import asyncHandler from 'express-async-handler';
import { CompleteError } from './functions/Error/CompleteError.js';
import {CreateCategoryStatus} from './functions/Category/CreateCategoryStatus.js';
import { CreateGeneralStatus } from './functions/General/CreateGeneralStatus.js';


const create_status=asyncHandler(async(req,res)=>{
    //! crée un status 
    //! list declaratns/témoins : [{NIN:VALUUE}]
    //! parents : numéro parents 
    const {
        type_acte,
        date,
        numero_registre,
        list_declarants=[],

        parents={},
        nom_nouveau_ne,
        prenom_nouveau_ne,
        sexe,
        lieu,
        profession,
        num_acte_naissance_personne_decede,
        mariage={},
        list_temoins=[],

    }=req.body;
    await CompleteError({   
        user:req.user,
        type_acte,
        date,
        list_declarants,
        parents,
        nom_nouveau_ne,
        prenom_nouveau_ne,
        sexe,
        lieu,
        num_acte_naissance_personne_decede,
        mariage,
        list_temoins
    })
    const acte=await CreateGeneralStatus({
        user:req.user,
        type_acte,
        date,
        numero_registre,
        lieu,
        list_declarants
    })


    //sauvgarder l'acte
    const acte_naissance =await CreateCategoryStatus({
        type_acte,
        sexe,
        acte:{...acte},
        profession,
        parents,
        nom_nouveau_ne,
        prenom_nouveau_ne,
        num_acte_naissance_personne_decede,
        mariage,
        list_temoins
    }) 
    res.json({message:"Acte crée ! ",acte:{...acte_naissance}})
})

export default create_status