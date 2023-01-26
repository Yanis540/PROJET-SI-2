import { STATUS } from "../../../../types/StatusTypes.js";
import { ARRAY_SEXES } from "../../../../types/SexeTypes.js";
import { PrismaClient } from '@prisma/client'
import verifyPersonExist from "../../General/Error/functions/verifyPersonExist.js";
import checkActeNaissance from "../../../../Update/Update/functions/checkActeNaissance.js";
const prisma = new PrismaClient();
const {NAISSANCE,DECES,MARIAGE}=STATUS;


export const NaissanceErrors=async({sexe,parents,nom_nouveau_ne,prenom_nouveau_ne})=>{
    if( 
        !sexe 
        || !parents?.numero_acte_naissance_pere
        || !parents?.numero_acte_naissance_mere
        || !ARRAY_SEXES.some(sex=> sex==sexe) 
        || !nom_nouveau_ne?.trim()
        || !prenom_nouveau_ne?.trim()
    ) throw new Error("Informations incomplètes pour l'acte de naissance");
    await checkActeNaissance(parents?.numero_acte_naissance_pere);
    await checkActeNaissance(parents?.numero_acte_naissance_mere);
}
export const DecesErrors =async({num_acte_naissance_personne_decede})=>{
    if(
        !num_acte_naissance_personne_decede
    ) throw new Error("Informations incomplètes pour l'acte de naissance");
    const already_dead=await prisma.acteDeces.findFirst({
        where:{
            num_acte_naissance:num_acte_naissance_personne_decede
        }
    });
    if(already_dead) throw new Error("Personne déjà déclaré morte x) ");
    
}

export const MariageErrors=async({mariage,list_temoins})=>{
    if(
        !mariage?.numero_acte_naissance_mari
        || !mariage?.numero_acte_naissance_femme
        || !list_temoins?.length
        // || list_temoins?.length<4
        || list_temoins?.some(temoin => !temoin.NIN)
    )throw new Error("Informations incomplète pour l'acte de mariage");
    await checkActeNaissance(mariage?.numero_acte_naissance_mari);
    await checkActeNaissance(mariage?.numero_acte_naissance_femme);
    await verifyPersonExist(list_temoins);
}

const CategoryErrors =async({
    type_acte,
    sexe,
    parents,
    nom_nouveau_ne,
    prenom_nouveau_ne,
    num_acte_naissance_personne_decede,
    mariage,
    list_temoins
})=>{
    
    switch(type_acte){
        case NAISSANCE:
            await NaissanceErrors({sexe,parents,nom_nouveau_ne,prenom_nouveau_ne})
            break;
        case DECES:
            await DecesErrors({num_acte_naissance_personne_decede});
            break;
        case MARIAGE:
            await MariageErrors({mariage,list_temoins})
            break ; 
        default : 
            break;
    } 
}
export default CategoryErrors;