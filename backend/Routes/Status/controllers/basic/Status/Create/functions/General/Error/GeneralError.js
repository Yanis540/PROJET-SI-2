import { ARRAY_STATUS } from "../../../../types/StatusTypes.js";
import { PrismaClient } from '@prisma/client'
import verifyPersonExist from "./functions/verifyPersonExist.js";
import validateDate from "../../../../Update/Update/functions/validateDate.js";
const prisma = new PrismaClient();

const GeneralError=async(data)=>{
    const {
        type_acte,
        lieu,
        date,
        user,
        list_declarants
    }=data;
    if(!type_acte||!list_declarants?.length||!lieu) throw new Error("Type acte/ déclarants / lieu  obligatoires  ");
    await verifyPersonExist(list_declarants);
    if(!ARRAY_STATUS.some(type=>type===type_acte)) throw new Error("Type de registre invalide ");
    if(date)
        validateDate(date);
    const annee=date?new Date(date).getFullYear():new Date().getFullYear();
    const register=await prisma.registre.findFirst({
        where:{
            annee:annee,
            num_commune:user.num_commune,
            type_registre:type_acte
        }
    });
    if(!register) throw new Error(`Register ${type_acte} for the year ${annee} `);
}
export default GeneralError