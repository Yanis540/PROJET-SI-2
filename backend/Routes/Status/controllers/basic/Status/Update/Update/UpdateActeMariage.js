import { PrismaClient } from '@prisma/client'
import checkActeNaissance from './functions/checkActeNaissance.js';
import validateDate from './functions/validateDate.js';

const prisma = new PrismaClient();

const UpdateActeMariage =async(data)=>{
    const {
        id,
        numero_acte_naissance_femme,
        numero_acte_naissance_mari,
        lieu,
        date,
        list_temoins,
        list_declarants
    }=data;
    if(numero_acte_naissance_femme)
        await checkActeNaissance(numero_acte_naissance_femme)
    if(numero_acte_naissance_mari)
        await checkActeNaissance(numero_acte_naissance_mari)
    if(date )
        validateDate(date);
    
    return await prisma.acteMariage.update({
        where:{
            num_acte:id
        },
        data:{
            acte_naissance_mari:numero_acte_naissance_mari?.trim()?{
                connect:{
                    num_acte:numero_acte_naissance_mari
                }
            }:{},
            acte_naissance_femme:numero_acte_naissance_femme?.trim()?{
                connect:{
                    num_acte:numero_acte_naissance_femme
                }
            }:{},
            temoignages:list_temoins??undefined,
            acte:{
                update:{
                    lieu:lieu?.trim()?.length?lieu.trim():undefined,
                    date:date?.trim()?.length?new Date(date):undefined,
                    declarations:list_declarants?.length?list_declarants:undefined,
                }
            }
        }
    })
}
export default UpdateActeMariage;