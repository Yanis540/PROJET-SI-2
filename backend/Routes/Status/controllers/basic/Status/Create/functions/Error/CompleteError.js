import GeneralError from "../General/Error/GeneralError.js";
import CategoryErrors from "../Category/Error/CategoryErrors.js";


export const CompleteError=async({
    user,
    type_acte,
    date,
    list_declarants=[],
    parents={},
    nom_nouveau_ne,
    prenom_nouveau_ne,
    sexe,
    lieu,
    num_acte_naissance_personne_decede,
    mariage={},
    list_temoins=[],
})=>{
    await GeneralError({type_acte,date,lieu,user, list_declarants})
    await CategoryErrors({
        type_acte,
        sexe,
        parents,
        nom_nouveau_ne,
        prenom_nouveau_ne,
        num_acte_naissance_personne_decede,
        mariage,
        list_temoins
    })
}